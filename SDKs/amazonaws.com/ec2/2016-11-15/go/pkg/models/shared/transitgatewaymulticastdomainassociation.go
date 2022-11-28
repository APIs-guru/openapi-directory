package shared

// TransitGatewayMulticastDomainAssociation
// Describes the resources associated with the transit gateway multicast domain.
type TransitGatewayMulticastDomainAssociation struct {
	ResourceID                 *string
	ResourceOwnerID            *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	Subnet                     *SubnetAssociation
	TransitGatewayAttachmentID *string
}
