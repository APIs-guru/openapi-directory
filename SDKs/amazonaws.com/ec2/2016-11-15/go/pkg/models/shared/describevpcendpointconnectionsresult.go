package shared

type DescribeVpcEndpointConnectionsResult struct {
	NextToken              *string
	VpcEndpointConnections []VpcEndpointConnection
}
