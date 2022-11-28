package shared

// TransitGatewayOptions
// Describes the options for a transit gateway.
type TransitGatewayOptions struct {
	AmazonSideAsn                  *int64
	AssociationDefaultRouteTableID *string
	AutoAcceptSharedAttachments    *AutoAcceptSharedAttachmentsValueEnum
	DefaultRouteTableAssociation   *DefaultRouteTableAssociationValueEnum
	DefaultRouteTablePropagation   *DefaultRouteTablePropagationValueEnum
	DNSSupport                     *DNSSupportValueEnum
	MulticastSupport               *MulticastSupportValueEnum
	PropagationDefaultRouteTableID *string
	TransitGatewayCidrBlocks       []string
	VpnEcmpSupport                 *VpnEcmpSupportValueEnum
}
