package shared



type JobFlowInstancesDetail struct {
    Ec2KeyName *string `json:"Ec2KeyName,omitempty"`
    Ec2SubnetID *string `json:"Ec2SubnetId,omitempty"`
    HadoopVersion *string `json:"HadoopVersion,omitempty"`
    InstanceCount int64 `json:"InstanceCount"`
    InstanceGroups []InstanceGroupDetail `json:"InstanceGroups,omitempty"`
    KeepJobFlowAliveWhenNoSteps *bool `json:"KeepJobFlowAliveWhenNoSteps,omitempty"`
    MasterInstanceID *string `json:"MasterInstanceId,omitempty"`
    MasterInstanceType string `json:"MasterInstanceType"`
    MasterPublicDNSName *string `json:"MasterPublicDnsName,omitempty"`
    NormalizedInstanceHours *int64 `json:"NormalizedInstanceHours,omitempty"`
    Placement *PlacementType `json:"Placement,omitempty"`
    SlaveInstanceType string `json:"SlaveInstanceType"`
    TerminationProtected *bool `json:"TerminationProtected,omitempty"`
    
}

