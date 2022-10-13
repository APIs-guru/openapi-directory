package shared

type VpcConfig struct {
	SecurityGroupIds []string `json:"securityGroupIds"`
	Subnets          []string `json:"subnets"`
	VpcID            *string  `json:"vpcId"`
}
