package shared

// NetworkFirewallBlackHoleRouteDetectedViolation
// Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
type NetworkFirewallBlackHoleRouteDetectedViolation struct {
	RouteTableID    *string `json:"RouteTableId,omitempty"`
	ViolatingRoutes []Route `json:"ViolatingRoutes,omitempty"`
	ViolationTarget *string `json:"ViolationTarget,omitempty"`
	VpcID           *string `json:"VpcId,omitempty"`
}
