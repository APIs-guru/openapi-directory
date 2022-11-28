package shared

// LoadBalancerState
// Information about the state of the load balancer.
type LoadBalancerState struct {
	Code   *LoadBalancerStateEnumEnum
	Reason *string
}
