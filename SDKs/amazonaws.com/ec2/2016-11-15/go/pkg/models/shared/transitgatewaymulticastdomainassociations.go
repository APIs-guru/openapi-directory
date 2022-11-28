package shared

// TransitGatewayMulticastDomainAssociations
// Describes the multicast domain associations.
type TransitGatewayMulticastDomainAssociations struct {
	ResourceID                      *string
	ResourceOwnerID                 *string
	ResourceType                    *TransitGatewayAttachmentResourceTypeEnum
	Subnets                         []SubnetAssociation
	TransitGatewayAttachmentID      *string
	TransitGatewayMulticastDomainID *string
}
