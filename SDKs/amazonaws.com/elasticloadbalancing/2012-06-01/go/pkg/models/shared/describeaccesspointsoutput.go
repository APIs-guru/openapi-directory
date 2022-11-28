package shared

// DescribeAccessPointsOutput
// Contains the parameters for DescribeLoadBalancers.
type DescribeAccessPointsOutput struct {
	LoadBalancerDescriptions []LoadBalancerDescription
	NextMarker               *string
}
