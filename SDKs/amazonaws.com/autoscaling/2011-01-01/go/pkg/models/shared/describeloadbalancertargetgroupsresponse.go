package shared

type DescribeLoadBalancerTargetGroupsResponse struct {
	LoadBalancerTargetGroups []LoadBalancerTargetGroupState
	NextToken                *string
}
