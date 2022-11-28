package shared

type LoadBalancerStateEnumEnum string

const (
	LoadBalancerStateEnumEnumActive         LoadBalancerStateEnumEnum = "active"
	LoadBalancerStateEnumEnumProvisioning   LoadBalancerStateEnumEnum = "provisioning"
	LoadBalancerStateEnumEnumActiveImpaired LoadBalancerStateEnumEnum = "active_impaired"
	LoadBalancerStateEnumEnumFailed         LoadBalancerStateEnumEnum = "failed"
)
