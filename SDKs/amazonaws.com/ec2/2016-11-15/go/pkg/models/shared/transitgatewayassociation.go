package shared

// TransitGatewayAssociation
// Describes an association between a resource attachment and a transit gateway route table.
type TransitGatewayAssociation struct {
	ResourceID                 *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	State                      *TransitGatewayAssociationStateEnum
	TransitGatewayAttachmentID *string
	TransitGatewayRouteTableID *string
}
