package shared

// NetworkACLAssociation
// Describes an association between a network ACL and a subnet.
type NetworkACLAssociation struct {
	NetworkACLAssociationID *string
	NetworkACLID            *string
	SubnetID                *string
}
