package shared

// LoadBalancerState
// Describes the state of a Classic Load Balancer.
type LoadBalancerState struct {
	LoadBalancerName *string
	State            *string
}
