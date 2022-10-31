package shared



type NetworkFirewallUnexpectedGatewayRoutesViolation struct {
    GatewayID *string `json:"GatewayId,omitempty"`
    RouteTableID *string `json:"RouteTableId,omitempty"`
    ViolatingRoutes []Route `json:"ViolatingRoutes,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

