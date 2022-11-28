package shared

// DescribeReplicationInstancesResponse
// <p/>
type DescribeReplicationInstancesResponse struct {
	Marker               *string               `json:"Marker,omitempty"`
	ReplicationInstances []ReplicationInstance `json:"ReplicationInstances,omitempty"`
}
