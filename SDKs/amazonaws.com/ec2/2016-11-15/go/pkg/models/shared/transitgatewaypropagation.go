package shared

// TransitGatewayPropagation
// Describes route propagation.
type TransitGatewayPropagation struct {
	ResourceID                 *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	State                      *TransitGatewayPropagationStateEnum
	TransitGatewayAttachmentID *string
	TransitGatewayRouteTableID *string
}
