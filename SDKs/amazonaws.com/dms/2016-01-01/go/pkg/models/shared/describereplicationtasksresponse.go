package shared

type DescribeReplicationTasksResponse struct {
	Marker           *string           `json:"Marker"`
	ReplicationTasks []ReplicationTask `json:"ReplicationTasks"`
}
