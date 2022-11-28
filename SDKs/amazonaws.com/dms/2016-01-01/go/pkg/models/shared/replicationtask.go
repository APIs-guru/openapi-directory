package shared

import (
	"time"
)

// ReplicationTask
// Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
type ReplicationTask struct {
	CdcStartPosition             *string                 `json:"CdcStartPosition,omitempty"`
	CdcStopPosition              *string                 `json:"CdcStopPosition,omitempty"`
	LastFailureMessage           *string                 `json:"LastFailureMessage,omitempty"`
	MigrationType                *MigrationTypeValueEnum `json:"MigrationType,omitempty"`
	RecoveryCheckpoint           *string                 `json:"RecoveryCheckpoint,omitempty"`
	ReplicationInstanceArn       *string                 `json:"ReplicationInstanceArn,omitempty"`
	ReplicationTaskArn           *string                 `json:"ReplicationTaskArn,omitempty"`
	ReplicationTaskCreationDate  *time.Time              `json:"ReplicationTaskCreationDate,omitempty"`
	ReplicationTaskIdentifier    *string                 `json:"ReplicationTaskIdentifier,omitempty"`
	ReplicationTaskSettings      *string                 `json:"ReplicationTaskSettings,omitempty"`
	ReplicationTaskStartDate     *time.Time              `json:"ReplicationTaskStartDate,omitempty"`
	ReplicationTaskStats         *ReplicationTaskStats   `json:"ReplicationTaskStats,omitempty"`
	SourceEndpointArn            *string                 `json:"SourceEndpointArn,omitempty"`
	Status                       *string                 `json:"Status,omitempty"`
	StopReason                   *string                 `json:"StopReason,omitempty"`
	TableMappings                *string                 `json:"TableMappings,omitempty"`
	TargetEndpointArn            *string                 `json:"TargetEndpointArn,omitempty"`
	TargetReplicationInstanceArn *string                 `json:"TargetReplicationInstanceArn,omitempty"`
	TaskData                     *string                 `json:"TaskData,omitempty"`
}
