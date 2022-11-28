package shared

// Ec2InstanceAttributes
// Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
type Ec2InstanceAttributes struct {
	AdditionalMasterSecurityGroups []string `json:"AdditionalMasterSecurityGroups,omitempty"`
	AdditionalSlaveSecurityGroups  []string `json:"AdditionalSlaveSecurityGroups,omitempty"`
	Ec2AvailabilityZone            *string  `json:"Ec2AvailabilityZone,omitempty"`
	Ec2KeyName                     *string  `json:"Ec2KeyName,omitempty"`
	Ec2SubnetID                    *string  `json:"Ec2SubnetId,omitempty"`
	EmrManagedMasterSecurityGroup  *string  `json:"EmrManagedMasterSecurityGroup,omitempty"`
	EmrManagedSlaveSecurityGroup   *string  `json:"EmrManagedSlaveSecurityGroup,omitempty"`
	IamInstanceProfile             *string  `json:"IamInstanceProfile,omitempty"`
	RequestedEc2AvailabilityZones  []string `json:"RequestedEc2AvailabilityZones,omitempty"`
	RequestedEc2SubnetIds          []string `json:"RequestedEc2SubnetIds,omitempty"`
	ServiceAccessSecurityGroup     *string  `json:"ServiceAccessSecurityGroup,omitempty"`
}
