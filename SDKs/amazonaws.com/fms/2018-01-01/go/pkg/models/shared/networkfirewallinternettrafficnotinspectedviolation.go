package shared



type NetworkFirewallInternetTrafficNotInspectedViolation struct {
    ActualFirewallSubnetRoutes []Route `json:"ActualFirewallSubnetRoutes,omitempty"`
    ActualInternetGatewayRoutes []Route `json:"ActualInternetGatewayRoutes,omitempty"`
    CurrentFirewallSubnetRouteTable *string `json:"CurrentFirewallSubnetRouteTable,omitempty"`
    CurrentInternetGatewayRouteTable *string `json:"CurrentInternetGatewayRouteTable,omitempty"`
    ExpectedFirewallEndpoint *string `json:"ExpectedFirewallEndpoint,omitempty"`
    ExpectedFirewallSubnetRoutes []ExpectedRoute `json:"ExpectedFirewallSubnetRoutes,omitempty"`
    ExpectedInternetGatewayRoutes []ExpectedRoute `json:"ExpectedInternetGatewayRoutes,omitempty"`
    FirewallSubnetID *string `json:"FirewallSubnetId,omitempty"`
    InternetGatewayID *string `json:"InternetGatewayId,omitempty"`
    IsRouteTableUsedInDifferentAz *bool `json:"IsRouteTableUsedInDifferentAZ,omitempty"`
    RouteTableID *string `json:"RouteTableId,omitempty"`
    SubnetAvailabilityZone *string `json:"SubnetAvailabilityZone,omitempty"`
    SubnetID *string `json:"SubnetId,omitempty"`
    ViolatingRoutes []Route `json:"ViolatingRoutes,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

