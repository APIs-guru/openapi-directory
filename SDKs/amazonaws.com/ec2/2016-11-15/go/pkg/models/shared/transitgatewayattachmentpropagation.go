package shared

// TransitGatewayAttachmentPropagation
// Describes a propagation route table.
type TransitGatewayAttachmentPropagation struct {
	State                      *TransitGatewayPropagationStateEnum
	TransitGatewayRouteTableID *string
}
