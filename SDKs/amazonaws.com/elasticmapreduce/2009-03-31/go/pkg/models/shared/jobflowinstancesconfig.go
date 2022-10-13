package shared

type JobFlowInstancesConfig struct {
	AdditionalMasterSecurityGroups []string              `json:"AdditionalMasterSecurityGroups"`
	AdditionalSlaveSecurityGroups  []string              `json:"AdditionalSlaveSecurityGroups"`
	Ec2KeyName                     *string               `json:"Ec2KeyName"`
	Ec2SubnetID                    *string               `json:"Ec2SubnetId"`
	Ec2SubnetIds                   []string              `json:"Ec2SubnetIds"`
	EmrManagedMasterSecurityGroup  *string               `json:"EmrManagedMasterSecurityGroup"`
	EmrManagedSlaveSecurityGroup   *string               `json:"EmrManagedSlaveSecurityGroup"`
	HadoopVersion                  *string               `json:"HadoopVersion"`
	InstanceCount                  *int64                `json:"InstanceCount"`
	InstanceFleets                 []InstanceFleetConfig `json:"InstanceFleets"`
	InstanceGroups                 []InstanceGroupConfig `json:"InstanceGroups"`
	KeepJobFlowAliveWhenNoSteps    *bool                 `json:"KeepJobFlowAliveWhenNoSteps"`
	MasterInstanceType             *string               `json:"MasterInstanceType"`
	Placement                      *PlacementType        `json:"Placement"`
	ServiceAccessSecurityGroup     *string               `json:"ServiceAccessSecurityGroup"`
	SlaveInstanceType              *string               `json:"SlaveInstanceType"`
	TerminationProtected           *bool                 `json:"TerminationProtected"`
}
