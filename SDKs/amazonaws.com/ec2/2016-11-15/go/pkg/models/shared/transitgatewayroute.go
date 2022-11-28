package shared

// TransitGatewayRoute
// Describes a route for a transit gateway route table.
type TransitGatewayRoute struct {
	DestinationCidrBlock      *string
	PrefixListID              *string
	State                     *TransitGatewayRouteStateEnum
	TransitGatewayAttachments []TransitGatewayRouteAttachment
	Type                      *TransitGatewayRouteTypeEnum
}
