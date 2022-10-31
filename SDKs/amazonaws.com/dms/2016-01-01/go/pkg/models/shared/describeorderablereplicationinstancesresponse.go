package shared

type DescribeOrderableReplicationInstancesResponse struct {
	Marker                        *string                        `json:"Marker,omitempty"`
	OrderableReplicationInstances []OrderableReplicationInstance `json:"OrderableReplicationInstances,omitempty"`
}
