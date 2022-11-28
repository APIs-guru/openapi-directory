package shared

type DescribeVpcPeeringConnectionsResult struct {
	NextToken             *string
	VpcPeeringConnections []VpcPeeringConnection
}
