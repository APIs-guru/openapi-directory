package shared

// LoadBalancerAddress
// Information about a static IP address for a load balancer.
type LoadBalancerAddress struct {
	AllocationID       *string
	IPv6Address        *string
	IPAddress          *string
	PrivateIPv4Address *string
}
