package shared

// JobFlowInstancesConfig
// A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
type JobFlowInstancesConfig struct {
	AdditionalMasterSecurityGroups []string              `json:"AdditionalMasterSecurityGroups,omitempty"`
	AdditionalSlaveSecurityGroups  []string              `json:"AdditionalSlaveSecurityGroups,omitempty"`
	Ec2KeyName                     *string               `json:"Ec2KeyName,omitempty"`
	Ec2SubnetID                    *string               `json:"Ec2SubnetId,omitempty"`
	Ec2SubnetIds                   []string              `json:"Ec2SubnetIds,omitempty"`
	EmrManagedMasterSecurityGroup  *string               `json:"EmrManagedMasterSecurityGroup,omitempty"`
	EmrManagedSlaveSecurityGroup   *string               `json:"EmrManagedSlaveSecurityGroup,omitempty"`
	HadoopVersion                  *string               `json:"HadoopVersion,omitempty"`
	InstanceCount                  *int64                `json:"InstanceCount,omitempty"`
	InstanceFleets                 []InstanceFleetConfig `json:"InstanceFleets,omitempty"`
	InstanceGroups                 []InstanceGroupConfig `json:"InstanceGroups,omitempty"`
	KeepJobFlowAliveWhenNoSteps    *bool                 `json:"KeepJobFlowAliveWhenNoSteps,omitempty"`
	MasterInstanceType             *string               `json:"MasterInstanceType,omitempty"`
	Placement                      *PlacementType        `json:"Placement,omitempty"`
	ServiceAccessSecurityGroup     *string               `json:"ServiceAccessSecurityGroup,omitempty"`
	SlaveInstanceType              *string               `json:"SlaveInstanceType,omitempty"`
	TerminationProtected           *bool                 `json:"TerminationProtected,omitempty"`
}
