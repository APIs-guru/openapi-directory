package shared

// LoadBalancerAttributes
// The attributes for a load balancer.
type LoadBalancerAttributes struct {
	AccessLog              *AccessLog
	AdditionalAttributes   []AdditionalAttribute
	ConnectionDraining     *ConnectionDraining
	ConnectionSettings     *ConnectionSettings
	CrossZoneLoadBalancing *CrossZoneLoadBalancing
}
