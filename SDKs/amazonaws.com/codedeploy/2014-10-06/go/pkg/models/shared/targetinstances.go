package shared

// TargetInstances
// Information about the instances to be used in the replacement environment in a blue/green deployment.
type TargetInstances struct {
	AutoScalingGroups []string       `json:"autoScalingGroups,omitempty"`
	Ec2TagSet         *Ec2TagSet     `json:"ec2TagSet,omitempty"`
	TagFilters        []Ec2TagFilter `json:"tagFilters,omitempty"`
}
