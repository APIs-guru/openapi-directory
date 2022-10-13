package shared

type TargetInstances struct {
	AutoScalingGroups []string       `json:"autoScalingGroups"`
	Ec2TagSet         *Ec2TagSet     `json:"ec2TagSet"`
	TagFilters        []Ec2TagFilter `json:"tagFilters"`
}
