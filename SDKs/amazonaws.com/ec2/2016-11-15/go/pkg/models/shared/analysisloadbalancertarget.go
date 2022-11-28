package shared

// AnalysisLoadBalancerTarget
// Describes a load balancer target.
type AnalysisLoadBalancerTarget struct {
	Address          *string
	AvailabilityZone *string
	Instance         *AnalysisComponent
	Port             *int64
}
