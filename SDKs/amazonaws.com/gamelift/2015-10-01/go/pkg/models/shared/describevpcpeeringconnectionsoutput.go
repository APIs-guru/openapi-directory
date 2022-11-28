package shared

// DescribeVpcPeeringConnectionsOutput
// Represents the returned data in response to a request operation.
type DescribeVpcPeeringConnectionsOutput struct {
	VpcPeeringConnections []VpcPeeringConnection `json:"VpcPeeringConnections,omitempty"`
}
