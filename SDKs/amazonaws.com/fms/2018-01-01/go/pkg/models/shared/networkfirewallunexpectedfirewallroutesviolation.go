package shared

type NetworkFirewallUnexpectedFirewallRoutesViolation struct {
	FirewallEndpoint *string `json:"FirewallEndpoint"`
	FirewallSubnetID *string `json:"FirewallSubnetId"`
	RouteTableID     *string `json:"RouteTableId"`
	ViolatingRoutes  []Route `json:"ViolatingRoutes"`
	VpcID            *string `json:"VpcId"`
}
