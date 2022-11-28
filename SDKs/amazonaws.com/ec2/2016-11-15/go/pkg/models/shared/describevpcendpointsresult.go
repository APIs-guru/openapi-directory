package shared

// DescribeVpcEndpointsResult
// Contains the output of DescribeVpcEndpoints.
type DescribeVpcEndpointsResult struct {
	NextToken    *string
	VpcEndpoints []VpcEndpoint
}
