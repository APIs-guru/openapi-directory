package shared

// VpcConfig
// Information about the VPC configuration that CodeBuild accesses.
type VpcConfig struct {
	SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
	Subnets          []string `json:"subnets,omitempty"`
	VpcID            *string  `json:"vpcId,omitempty"`
}
