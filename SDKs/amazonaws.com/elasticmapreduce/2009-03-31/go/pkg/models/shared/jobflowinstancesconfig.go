package shared



type JobFlowInstancesConfig struct {
    AdditionalMasterSecurityGroups []string `json:"AdditionalMasterSecurityGroups,omitempty"`
    AdditionalSlaveSecurityGroups []string `json:"AdditionalSlaveSecurityGroups,omitempty"`
    Ec2KeyName *string `json:"Ec2KeyName,omitempty"`
    Ec2SubnetID *string `json:"Ec2SubnetId,omitempty"`
    Ec2SubnetIds []string `json:"Ec2SubnetIds,omitempty"`
    EmrManagedMasterSecurityGroup *string `json:"EmrManagedMasterSecurityGroup,omitempty"`
    EmrManagedSlaveSecurityGroup *string `json:"EmrManagedSlaveSecurityGroup,omitempty"`
    HadoopVersion *string `json:"HadoopVersion,omitempty"`
    InstanceCount *int64 `json:"InstanceCount,omitempty"`
    InstanceFleets []InstanceFleetConfig `json:"InstanceFleets,omitempty"`
    InstanceGroups []InstanceGroupConfig `json:"InstanceGroups,omitempty"`
    KeepJobFlowAliveWhenNoSteps *bool `json:"KeepJobFlowAliveWhenNoSteps,omitempty"`
    MasterInstanceType *string `json:"MasterInstanceType,omitempty"`
    Placement *PlacementType `json:"Placement,omitempty"`
    ServiceAccessSecurityGroup *string `json:"ServiceAccessSecurityGroup,omitempty"`
    SlaveInstanceType *string `json:"SlaveInstanceType,omitempty"`
    TerminationProtected *bool `json:"TerminationProtected,omitempty"`
    
}

