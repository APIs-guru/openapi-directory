package shared

// DescribeSpotFleetInstancesResponse
// Contains the output of DescribeSpotFleetInstances.
type DescribeSpotFleetInstancesResponse struct {
	ActiveInstances    []ActiveInstance
	NextToken          *string
	SpotFleetRequestID *string
}
