package shared

// SubnetAssociation
// Describes the subnet association with the transit gateway multicast domain.
type SubnetAssociation struct {
	State    *TransitGatewayMulitcastDomainAssociationStateEnum
	SubnetID *string
}
