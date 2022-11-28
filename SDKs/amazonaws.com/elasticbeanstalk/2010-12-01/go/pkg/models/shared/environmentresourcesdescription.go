package shared

// EnvironmentResourcesDescription
// Describes the AWS resources in use by this environment. This data is not live data.
type EnvironmentResourcesDescription struct {
	LoadBalancer *LoadBalancerDescription
}
