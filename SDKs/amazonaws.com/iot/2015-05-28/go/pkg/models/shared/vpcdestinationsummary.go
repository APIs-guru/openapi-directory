package shared

type VpcDestinationSummary struct {
	RoleArn        *string  `json:"roleArn"`
	SecurityGroups []string `json:"securityGroups"`
	SubnetIds      []string `json:"subnetIds"`
	VpcID          *string  `json:"vpcId"`
}
