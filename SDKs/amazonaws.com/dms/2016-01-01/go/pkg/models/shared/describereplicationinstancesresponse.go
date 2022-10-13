package shared

type DescribeReplicationInstancesResponse struct {
	Marker               *string               `json:"Marker"`
	ReplicationInstances []ReplicationInstance `json:"ReplicationInstances"`
}
