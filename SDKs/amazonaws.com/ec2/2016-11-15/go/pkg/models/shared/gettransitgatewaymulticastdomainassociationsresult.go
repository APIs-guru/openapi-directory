package shared

type GetTransitGatewayMulticastDomainAssociationsResult struct {
	MulticastDomainAssociations []TransitGatewayMulticastDomainAssociation
	NextToken                   *string
}
