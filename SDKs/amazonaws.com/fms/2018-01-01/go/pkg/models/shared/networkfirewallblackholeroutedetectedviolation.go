package shared

type NetworkFirewallBlackHoleRouteDetectedViolation struct {
	RouteTableID    *string `json:"RouteTableId,omitempty"`
	ViolatingRoutes []Route `json:"ViolatingRoutes,omitempty"`
	ViolationTarget *string `json:"ViolationTarget,omitempty"`
	VpcID           *string `json:"VpcId,omitempty"`
}
