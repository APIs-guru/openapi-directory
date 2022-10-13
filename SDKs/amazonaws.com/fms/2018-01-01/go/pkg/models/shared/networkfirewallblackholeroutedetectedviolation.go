package shared

type NetworkFirewallBlackHoleRouteDetectedViolation struct {
	RouteTableID    *string `json:"RouteTableId"`
	ViolatingRoutes []Route `json:"ViolatingRoutes"`
	ViolationTarget *string `json:"ViolationTarget"`
	VpcID           *string `json:"VpcId"`
}
