package shared

type DescribeReplicationInstanceTaskLogsResponse struct {
	Marker                      *string                      `json:"Marker,omitempty"`
	ReplicationInstanceArn      *string                      `json:"ReplicationInstanceArn,omitempty"`
	ReplicationInstanceTaskLogs []ReplicationInstanceTaskLog `json:"ReplicationInstanceTaskLogs,omitempty"`
}
