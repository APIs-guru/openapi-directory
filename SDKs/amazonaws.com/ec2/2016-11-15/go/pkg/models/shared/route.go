package shared

// Route
// Describes a route in a route table.
type Route struct {
	CarrierGatewayID            *string
	DestinationCidrBlock        *string
	DestinationIpv6CidrBlock    *string
	DestinationPrefixListID     *string
	EgressOnlyInternetGatewayID *string
	GatewayID                   *string
	InstanceID                  *string
	InstanceOwnerID             *string
	LocalGatewayID              *string
	NatGatewayID                *string
	NetworkInterfaceID          *string
	Origin                      *RouteOriginEnum
	State                       *RouteStateEnum
	TransitGatewayID            *string
	VpcPeeringConnectionID      *string
}
