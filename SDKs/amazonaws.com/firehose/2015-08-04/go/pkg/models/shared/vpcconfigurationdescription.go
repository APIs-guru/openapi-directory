package shared

type VpcConfigurationDescription struct {
	RoleArn          string   `json:"RoleARN"`
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            string   `json:"VpcId"`
}
