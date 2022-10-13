package shared

type VpcDestinationConfiguration struct {
	RoleArn        string   `json:"roleArn"`
	SecurityGroups []string `json:"securityGroups"`
	SubnetIds      []string `json:"subnetIds"`
	VpcID          string   `json:"vpcId"`
}
