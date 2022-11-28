package shared

// DescribeSpotInstanceRequestsResult
// Contains the output of DescribeSpotInstanceRequests.
type DescribeSpotInstanceRequestsResult struct {
	NextToken            *string
	SpotInstanceRequests []SpotInstanceRequest
}
