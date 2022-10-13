package shared

import (
	"time"
)

type ModifyReplicationTaskMessage struct {
	CdcStartPosition          *string                 `json:"CdcStartPosition"`
	CdcStartTime              *time.Time              `json:"CdcStartTime"`
	CdcStopPosition           *string                 `json:"CdcStopPosition"`
	MigrationType             *MigrationTypeValueEnum `json:"MigrationType"`
	ReplicationTaskArn        string                  `json:"ReplicationTaskArn"`
	ReplicationTaskIdentifier *string                 `json:"ReplicationTaskIdentifier"`
	ReplicationTaskSettings   *string                 `json:"ReplicationTaskSettings"`
	TableMappings             *string                 `json:"TableMappings"`
	TaskData                  *string                 `json:"TaskData"`
}
