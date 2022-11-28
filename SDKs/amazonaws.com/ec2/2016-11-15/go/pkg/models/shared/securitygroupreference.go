package shared

// SecurityGroupReference
// Describes a VPC with a security group that references your security group.
type SecurityGroupReference struct {
	GroupID                *string
	ReferencingVpcID       *string
	VpcPeeringConnectionID *string
}
