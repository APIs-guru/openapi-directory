package shared

type NetworkFirewallInvalidRouteConfigurationViolation struct {
	ActualFirewallEndpoint           *string         `json:"ActualFirewallEndpoint"`
	ActualFirewallSubnetID           *string         `json:"ActualFirewallSubnetId"`
	ActualFirewallSubnetRoutes       []Route         `json:"ActualFirewallSubnetRoutes"`
	ActualInternetGatewayRoutes      []Route         `json:"ActualInternetGatewayRoutes"`
	AffectedSubnets                  []string        `json:"AffectedSubnets"`
	CurrentFirewallSubnetRouteTable  *string         `json:"CurrentFirewallSubnetRouteTable"`
	CurrentInternetGatewayRouteTable *string         `json:"CurrentInternetGatewayRouteTable"`
	ExpectedFirewallEndpoint         *string         `json:"ExpectedFirewallEndpoint"`
	ExpectedFirewallSubnetID         *string         `json:"ExpectedFirewallSubnetId"`
	ExpectedFirewallSubnetRoutes     []ExpectedRoute `json:"ExpectedFirewallSubnetRoutes"`
	ExpectedInternetGatewayRoutes    []ExpectedRoute `json:"ExpectedInternetGatewayRoutes"`
	InternetGatewayID                *string         `json:"InternetGatewayId"`
	IsRouteTableUsedInDifferentAz    *bool           `json:"IsRouteTableUsedInDifferentAZ"`
	RouteTableID                     *string         `json:"RouteTableId"`
	ViolatingRoute                   *Route          `json:"ViolatingRoute"`
	VpcID                            *string         `json:"VpcId"`
}
