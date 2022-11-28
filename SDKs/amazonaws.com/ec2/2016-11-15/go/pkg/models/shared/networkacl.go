package shared

// NetworkACL
// Describes a network ACL.
type NetworkACL struct {
	Associations []NetworkACLAssociation
	Entries      []NetworkACLEntry
	IsDefault    *bool
	NetworkACLID *string
	OwnerID      *string
	Tags         []Tag
	VpcID        *string
}
