package shared

type DescribeOrderableReplicationInstancesResponse struct {
	Marker                        *string                        `json:"Marker"`
	OrderableReplicationInstances []OrderableReplicationInstance `json:"OrderableReplicationInstances"`
}
