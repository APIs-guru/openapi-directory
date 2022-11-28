package shared

type DescribeLoadBalancersOutput struct {
	LoadBalancers []LoadBalancer
	NextMarker    *string
}
