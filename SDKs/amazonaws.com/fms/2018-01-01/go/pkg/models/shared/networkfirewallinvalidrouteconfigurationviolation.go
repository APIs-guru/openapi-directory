package shared

type NetworkFirewallInvalidRouteConfigurationViolation struct {
	ActualFirewallEndpoint           *string         `json:"ActualFirewallEndpoint,omitempty"`
	ActualFirewallSubnetID           *string         `json:"ActualFirewallSubnetId,omitempty"`
	ActualFirewallSubnetRoutes       []Route         `json:"ActualFirewallSubnetRoutes,omitempty"`
	ActualInternetGatewayRoutes      []Route         `json:"ActualInternetGatewayRoutes,omitempty"`
	AffectedSubnets                  []string        `json:"AffectedSubnets,omitempty"`
	CurrentFirewallSubnetRouteTable  *string         `json:"CurrentFirewallSubnetRouteTable,omitempty"`
	CurrentInternetGatewayRouteTable *string         `json:"CurrentInternetGatewayRouteTable,omitempty"`
	ExpectedFirewallEndpoint         *string         `json:"ExpectedFirewallEndpoint,omitempty"`
	ExpectedFirewallSubnetID         *string         `json:"ExpectedFirewallSubnetId,omitempty"`
	ExpectedFirewallSubnetRoutes     []ExpectedRoute `json:"ExpectedFirewallSubnetRoutes,omitempty"`
	ExpectedInternetGatewayRoutes    []ExpectedRoute `json:"ExpectedInternetGatewayRoutes,omitempty"`
	InternetGatewayID                *string         `json:"InternetGatewayId,omitempty"`
	IsRouteTableUsedInDifferentAz    *bool           `json:"IsRouteTableUsedInDifferentAZ,omitempty"`
	RouteTableID                     *string         `json:"RouteTableId,omitempty"`
	ViolatingRoute                   *Route          `json:"ViolatingRoute,omitempty"`
	VpcID                            *string         `json:"VpcId,omitempty"`
}
