package shared

// AnalysisRouteTableRoute
// Describes a route table route.
type AnalysisRouteTableRoute struct {
	DestinationCidr             *string
	DestinationPrefixListID     *string
	EgressOnlyInternetGatewayID *string
	GatewayID                   *string
	InstanceID                  *string
	NatGatewayID                *string
	NetworkInterfaceID          *string
	Origin                      *string
	TransitGatewayID            *string
	VpcPeeringConnectionID      *string
}
