package shared

type NetworkFirewallUnexpectedGatewayRoutesViolation struct {
	GatewayID       *string `json:"GatewayId"`
	RouteTableID    *string `json:"RouteTableId"`
	ViolatingRoutes []Route `json:"ViolatingRoutes"`
	VpcID           *string `json:"VpcId"`
}
