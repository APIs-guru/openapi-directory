package shared

import (
	"time"
)

type CreateReplicationTaskMessage struct {
	CdcStartPosition          *string                `json:"CdcStartPosition"`
	CdcStartTime              *time.Time             `json:"CdcStartTime"`
	CdcStopPosition           *string                `json:"CdcStopPosition"`
	MigrationType             MigrationTypeValueEnum `json:"MigrationType"`
	ReplicationInstanceArn    string                 `json:"ReplicationInstanceArn"`
	ReplicationTaskIdentifier string                 `json:"ReplicationTaskIdentifier"`
	ReplicationTaskSettings   *string                `json:"ReplicationTaskSettings"`
	ResourceIdentifier        *string                `json:"ResourceIdentifier"`
	SourceEndpointArn         string                 `json:"SourceEndpointArn"`
	TableMappings             string                 `json:"TableMappings"`
	Tags                      []Tag                  `json:"Tags"`
	TargetEndpointArn         string                 `json:"TargetEndpointArn"`
	TaskData                  *string                `json:"TaskData"`
}
