package shared

// DescribeSpotFleetRequestsResponse
// Contains the output of DescribeSpotFleetRequests.
type DescribeSpotFleetRequestsResponse struct {
	NextToken               *string
	SpotFleetRequestConfigs []SpotFleetRequestConfig
}
