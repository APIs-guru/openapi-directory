package shared

type ComputeResource struct {
	AllocationStrategy *CrAllocationStrategyEnum    `json:"allocationStrategy"`
	BidPercentage      *int64                       `json:"bidPercentage"`
	DesiredvCpus       *int64                       `json:"desiredvCpus"`
	Ec2Configuration   []Ec2Configuration           `json:"ec2Configuration"`
	Ec2KeyPair         *string                      `json:"ec2KeyPair"`
	ImageID            *string                      `json:"imageId"`
	InstanceRole       *string                      `json:"instanceRole"`
	InstanceTypes      []string                     `json:"instanceTypes"`
	LaunchTemplate     *LaunchTemplateSpecification `json:"launchTemplate"`
	MaxvCpus           int64                        `json:"maxvCpus"`
	MinvCpus           *int64                       `json:"minvCpus"`
	PlacementGroup     *string                      `json:"placementGroup"`
	SecurityGroupIds   []string                     `json:"securityGroupIds"`
	SpotIamFleetRole   *string                      `json:"spotIamFleetRole"`
	Subnets            []string                     `json:"subnets"`
	Tags               map[string]string            `json:"tags"`
	Type               CrTypeEnum                   `json:"type"`
}
