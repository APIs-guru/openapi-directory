package shared

// LoadBalancersConfig
// Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
type LoadBalancersConfig struct {
	ClassicLoadBalancersConfig *ClassicLoadBalancersConfig
	TargetGroupsConfig         *TargetGroupsConfig
}
