package shared

type ReplicationInstanceTaskLog struct {
	ReplicationInstanceTaskLogSize *int64  `json:"ReplicationInstanceTaskLogSize"`
	ReplicationTaskArn             *string `json:"ReplicationTaskArn"`
	ReplicationTaskName            *string `json:"ReplicationTaskName"`
}
