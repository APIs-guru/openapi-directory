package shared

type TestGridVpcConfig struct {
	SecurityGroupIds []string `json:"securityGroupIds"`
	SubnetIds        []string `json:"subnetIds"`
	VpcID            string   `json:"vpcId"`
}
