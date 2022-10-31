package shared

type VpcConfig struct {
	SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
	Subnets          []string `json:"subnets,omitempty"`
	VpcID            *string  `json:"vpcId,omitempty"`
}
