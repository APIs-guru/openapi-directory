package shared

type DescribeReplicationTasksResponse struct {
	Marker           *string           `json:"Marker,omitempty"`
	ReplicationTasks []ReplicationTask `json:"ReplicationTasks,omitempty"`
}
