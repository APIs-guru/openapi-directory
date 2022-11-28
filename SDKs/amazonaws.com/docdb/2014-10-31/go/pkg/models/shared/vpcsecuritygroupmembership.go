package shared

// VpcSecurityGroupMembership
// Used as a response element for queries on virtual private cloud (VPC) security group membership.
type VpcSecurityGroupMembership struct {
	Status             *string
	VpcSecurityGroupID *string
}
