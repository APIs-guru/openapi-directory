package shared

// LocalGatewayRoute
// Describes a route for a local gateway route table.
type LocalGatewayRoute struct {
	DestinationCidrBlock                *string
	LocalGatewayRouteTableArn           *string
	LocalGatewayRouteTableID            *string
	LocalGatewayVirtualInterfaceGroupID *string
	OwnerID                             *string
	State                               *LocalGatewayRouteStateEnum
	Type                                *LocalGatewayRouteTypeEnum
}
