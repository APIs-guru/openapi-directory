package shared

// NetworkFirewallUnexpectedGatewayRoutesViolation
// Violation detail for an unexpected gateway route that’s present in a route table.
type NetworkFirewallUnexpectedGatewayRoutesViolation struct {
	GatewayID       *string `json:"GatewayId,omitempty"`
	RouteTableID    *string `json:"RouteTableId,omitempty"`
	ViolatingRoutes []Route `json:"ViolatingRoutes,omitempty"`
	VpcID           *string `json:"VpcId,omitempty"`
}
