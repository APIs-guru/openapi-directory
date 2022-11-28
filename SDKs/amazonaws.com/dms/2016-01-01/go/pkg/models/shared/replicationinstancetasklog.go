package shared

// ReplicationInstanceTaskLog
// Contains metadata for a replication instance task log.
type ReplicationInstanceTaskLog struct {
	ReplicationInstanceTaskLogSize *int64  `json:"ReplicationInstanceTaskLogSize,omitempty"`
	ReplicationTaskArn             *string `json:"ReplicationTaskArn,omitempty"`
	ReplicationTaskName            *string `json:"ReplicationTaskName,omitempty"`
}
