package shared

// TransitGatewayRouteTablePropagation
// Describes a route table propagation.
type TransitGatewayRouteTablePropagation struct {
	ResourceID                 *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	State                      *TransitGatewayPropagationStateEnum
	TransitGatewayAttachmentID *string
}
