package shared

type VpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	Subnets          []string `json:"Subnets"`
}
