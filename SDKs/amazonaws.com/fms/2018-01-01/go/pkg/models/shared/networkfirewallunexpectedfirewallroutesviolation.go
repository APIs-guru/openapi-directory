package shared

// NetworkFirewallUnexpectedFirewallRoutesViolation
// Violation detail for an unexpected route that's present in a route table.
type NetworkFirewallUnexpectedFirewallRoutesViolation struct {
	FirewallEndpoint *string `json:"FirewallEndpoint,omitempty"`
	FirewallSubnetID *string `json:"FirewallSubnetId,omitempty"`
	RouteTableID     *string `json:"RouteTableId,omitempty"`
	ViolatingRoutes  []Route `json:"ViolatingRoutes,omitempty"`
	VpcID            *string `json:"VpcId,omitempty"`
}
