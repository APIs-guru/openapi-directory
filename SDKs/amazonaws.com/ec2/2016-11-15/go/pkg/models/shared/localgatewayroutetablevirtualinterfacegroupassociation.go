package shared

// LocalGatewayRouteTableVirtualInterfaceGroupAssociation
// Describes an association between a local gateway route table and a virtual interface group.
type LocalGatewayRouteTableVirtualInterfaceGroupAssociation struct {
	LocalGatewayID                                           *string
	LocalGatewayRouteTableArn                                *string
	LocalGatewayRouteTableID                                 *string
	LocalGatewayRouteTableVirtualInterfaceGroupAssociationID *string
	LocalGatewayVirtualInterfaceGroupID                      *string
	OwnerID                                                  *string
	State                                                    *string
	Tags                                                     []Tag
}
