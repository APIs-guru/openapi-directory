package shared

import (
	"time"
)

type ReplicationTask struct {
	CdcStartPosition             *string                 `json:"CdcStartPosition"`
	CdcStopPosition              *string                 `json:"CdcStopPosition"`
	LastFailureMessage           *string                 `json:"LastFailureMessage"`
	MigrationType                *MigrationTypeValueEnum `json:"MigrationType"`
	RecoveryCheckpoint           *string                 `json:"RecoveryCheckpoint"`
	ReplicationInstanceArn       *string                 `json:"ReplicationInstanceArn"`
	ReplicationTaskArn           *string                 `json:"ReplicationTaskArn"`
	ReplicationTaskCreationDate  *time.Time              `json:"ReplicationTaskCreationDate"`
	ReplicationTaskIdentifier    *string                 `json:"ReplicationTaskIdentifier"`
	ReplicationTaskSettings      *string                 `json:"ReplicationTaskSettings"`
	ReplicationTaskStartDate     *time.Time              `json:"ReplicationTaskStartDate"`
	ReplicationTaskStats         *ReplicationTaskStats   `json:"ReplicationTaskStats"`
	SourceEndpointArn            *string                 `json:"SourceEndpointArn"`
	Status                       *string                 `json:"Status"`
	StopReason                   *string                 `json:"StopReason"`
	TableMappings                *string                 `json:"TableMappings"`
	TargetEndpointArn            *string                 `json:"TargetEndpointArn"`
	TargetReplicationInstanceArn *string                 `json:"TargetReplicationInstanceArn"`
	TaskData                     *string                 `json:"TaskData"`
}
