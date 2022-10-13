package shared

type JobFlowInstancesDetail struct {
	Ec2KeyName                  *string               `json:"Ec2KeyName"`
	Ec2SubnetID                 *string               `json:"Ec2SubnetId"`
	HadoopVersion               *string               `json:"HadoopVersion"`
	InstanceCount               int64                 `json:"InstanceCount"`
	InstanceGroups              []InstanceGroupDetail `json:"InstanceGroups"`
	KeepJobFlowAliveWhenNoSteps *bool                 `json:"KeepJobFlowAliveWhenNoSteps"`
	MasterInstanceID            *string               `json:"MasterInstanceId"`
	MasterInstanceType          string                `json:"MasterInstanceType"`
	MasterPublicDNSName         *string               `json:"MasterPublicDnsName"`
	NormalizedInstanceHours     *int64                `json:"NormalizedInstanceHours"`
	Placement                   *PlacementType        `json:"Placement"`
	SlaveInstanceType           string                `json:"SlaveInstanceType"`
	TerminationProtected        *bool                 `json:"TerminationProtected"`
}
