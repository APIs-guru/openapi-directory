package shared

// LocalGatewayRouteTableVpcAssociation
// Describes an association between a local gateway route table and a VPC.
type LocalGatewayRouteTableVpcAssociation struct {
	LocalGatewayID                         *string
	LocalGatewayRouteTableArn              *string
	LocalGatewayRouteTableID               *string
	LocalGatewayRouteTableVpcAssociationID *string
	OwnerID                                *string
	State                                  *string
	Tags                                   []Tag
	VpcID                                  *string
}
