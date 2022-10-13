package shared

type NetworkFirewallInternetTrafficNotInspectedViolation struct {
	ActualFirewallSubnetRoutes       []Route         `json:"ActualFirewallSubnetRoutes"`
	ActualInternetGatewayRoutes      []Route         `json:"ActualInternetGatewayRoutes"`
	CurrentFirewallSubnetRouteTable  *string         `json:"CurrentFirewallSubnetRouteTable"`
	CurrentInternetGatewayRouteTable *string         `json:"CurrentInternetGatewayRouteTable"`
	ExpectedFirewallEndpoint         *string         `json:"ExpectedFirewallEndpoint"`
	ExpectedFirewallSubnetRoutes     []ExpectedRoute `json:"ExpectedFirewallSubnetRoutes"`
	ExpectedInternetGatewayRoutes    []ExpectedRoute `json:"ExpectedInternetGatewayRoutes"`
	FirewallSubnetID                 *string         `json:"FirewallSubnetId"`
	InternetGatewayID                *string         `json:"InternetGatewayId"`
	IsRouteTableUsedInDifferentAz    *bool           `json:"IsRouteTableUsedInDifferentAZ"`
	RouteTableID                     *string         `json:"RouteTableId"`
	SubnetAvailabilityZone           *string         `json:"SubnetAvailabilityZone"`
	SubnetID                         *string         `json:"SubnetId"`
	ViolatingRoutes                  []Route         `json:"ViolatingRoutes"`
	VpcID                            *string         `json:"VpcId"`
}
