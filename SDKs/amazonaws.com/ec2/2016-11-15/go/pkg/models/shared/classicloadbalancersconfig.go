package shared

// ClassicLoadBalancersConfig
// Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
type ClassicLoadBalancersConfig struct {
	ClassicLoadBalancers []ClassicLoadBalancer
}
