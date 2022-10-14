package shared

import (
	"time"
)

type CreateReplicationTaskMessage struct {
	CdcStartPosition          *string                `json:"CdcStartPosition,omitempty"`
	CdcStartTime              *time.Time             `json:"CdcStartTime,omitempty"`
	CdcStopPosition           *string                `json:"CdcStopPosition,omitempty"`
	MigrationType             MigrationTypeValueEnum `json:"MigrationType"`
	ReplicationInstanceArn    string                 `json:"ReplicationInstanceArn"`
	ReplicationTaskIdentifier string                 `json:"ReplicationTaskIdentifier"`
	ReplicationTaskSettings   *string                `json:"ReplicationTaskSettings,omitempty"`
	ResourceIdentifier        *string                `json:"ResourceIdentifier,omitempty"`
	SourceEndpointArn         string                 `json:"SourceEndpointArn"`
	TableMappings             string                 `json:"TableMappings"`
	Tags                      []Tag                  `json:"Tags,omitempty"`
	TargetEndpointArn         string                 `json:"TargetEndpointArn"`
	TaskData                  *string                `json:"TaskData,omitempty"`
}
