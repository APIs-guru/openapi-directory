package shared

type DescribeReplicationInstanceTaskLogsResponse struct {
	Marker                      *string                      `json:"Marker"`
	ReplicationInstanceArn      *string                      `json:"ReplicationInstanceArn"`
	ReplicationInstanceTaskLogs []ReplicationInstanceTaskLog `json:"ReplicationInstanceTaskLogs"`
}
