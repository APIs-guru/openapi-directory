package shared

import (
	"time"
)

// ModifyReplicationTaskMessage
// <p/>
type ModifyReplicationTaskMessage struct {
	CdcStartPosition          *string                 `json:"CdcStartPosition,omitempty"`
	CdcStartTime              *time.Time              `json:"CdcStartTime,omitempty"`
	CdcStopPosition           *string                 `json:"CdcStopPosition,omitempty"`
	MigrationType             *MigrationTypeValueEnum `json:"MigrationType,omitempty"`
	ReplicationTaskArn        string                  `json:"ReplicationTaskArn"`
	ReplicationTaskIdentifier *string                 `json:"ReplicationTaskIdentifier,omitempty"`
	ReplicationTaskSettings   *string                 `json:"ReplicationTaskSettings,omitempty"`
	TableMappings             *string                 `json:"TableMappings,omitempty"`
	TaskData                  *string                 `json:"TaskData,omitempty"`
}
