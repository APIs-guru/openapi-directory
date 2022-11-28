package shared

// TransitGatewayPrefixListReference
// Describes a prefix list reference.
type TransitGatewayPrefixListReference struct {
	Blackhole                  *bool
	PrefixListID               *string
	PrefixListOwnerID          *string
	State                      *TransitGatewayPrefixListReferenceStateEnum
	TransitGatewayAttachment   *TransitGatewayPrefixListAttachment
	TransitGatewayRouteTableID *string
}
