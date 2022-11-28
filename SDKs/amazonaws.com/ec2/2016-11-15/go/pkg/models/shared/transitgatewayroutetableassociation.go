package shared

// TransitGatewayRouteTableAssociation
// Describes an association between a route table and a resource attachment.
type TransitGatewayRouteTableAssociation struct {
	ResourceID                 *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	State                      *TransitGatewayAssociationStateEnum
	TransitGatewayAttachmentID *string
}
