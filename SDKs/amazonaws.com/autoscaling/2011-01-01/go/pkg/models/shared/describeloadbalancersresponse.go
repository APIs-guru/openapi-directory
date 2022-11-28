package shared

type DescribeLoadBalancersResponse struct {
	LoadBalancers []LoadBalancerState
	NextToken     *string
}
