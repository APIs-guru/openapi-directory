package shared

// Ec2SecurityGroup
// Provides ownership and status information for an Amazon EC2 security group.
type Ec2SecurityGroup struct {
	Ec2SecurityGroupName    *string
	Ec2SecurityGroupOwnerID *string
	Status                  *string
}
