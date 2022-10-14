package shared

type ComputeResource struct {
	AllocationStrategy *CrAllocationStrategyEnum    `json:"allocationStrategy,omitempty"`
	BidPercentage      *int64                       `json:"bidPercentage,omitempty"`
	DesiredvCpus       *int64                       `json:"desiredvCpus,omitempty"`
	Ec2Configuration   []Ec2Configuration           `json:"ec2Configuration,omitempty"`
	Ec2KeyPair         *string                      `json:"ec2KeyPair,omitempty"`
	ImageID            *string                      `json:"imageId,omitempty"`
	InstanceRole       *string                      `json:"instanceRole,omitempty"`
	InstanceTypes      []string                     `json:"instanceTypes,omitempty"`
	LaunchTemplate     *LaunchTemplateSpecification `json:"launchTemplate,omitempty"`
	MaxvCpus           int64                        `json:"maxvCpus"`
	MinvCpus           *int64                       `json:"minvCpus,omitempty"`
	PlacementGroup     *string                      `json:"placementGroup,omitempty"`
	SecurityGroupIds   []string                     `json:"securityGroupIds,omitempty"`
	SpotIamFleetRole   *string                      `json:"spotIamFleetRole,omitempty"`
	Subnets            []string                     `json:"subnets"`
	Tags               map[string]string            `json:"tags,omitempty"`
	Type               CrTypeEnum                   `json:"type"`
}
