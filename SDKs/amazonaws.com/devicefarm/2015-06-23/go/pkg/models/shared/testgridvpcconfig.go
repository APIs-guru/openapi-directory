package shared

// TestGridVpcConfig
// The VPC security groups and subnets that are attached to a project.
type TestGridVpcConfig struct {
	SecurityGroupIds []string `json:"securityGroupIds"`
	SubnetIds        []string `json:"subnetIds"`
	VpcID            string   `json:"vpcId"`
}
