package shared

type Ec2InstanceAttributes struct {
	AdditionalMasterSecurityGroups []string `json:"AdditionalMasterSecurityGroups"`
	AdditionalSlaveSecurityGroups  []string `json:"AdditionalSlaveSecurityGroups"`
	Ec2AvailabilityZone            *string  `json:"Ec2AvailabilityZone"`
	Ec2KeyName                     *string  `json:"Ec2KeyName"`
	Ec2SubnetID                    *string  `json:"Ec2SubnetId"`
	EmrManagedMasterSecurityGroup  *string  `json:"EmrManagedMasterSecurityGroup"`
	EmrManagedSlaveSecurityGroup   *string  `json:"EmrManagedSlaveSecurityGroup"`
	IamInstanceProfile             *string  `json:"IamInstanceProfile"`
	RequestedEc2AvailabilityZones  []string `json:"RequestedEc2AvailabilityZones"`
	RequestedEc2SubnetIds          []string `json:"RequestedEc2SubnetIds"`
	ServiceAccessSecurityGroup     *string  `json:"ServiceAccessSecurityGroup"`
}
