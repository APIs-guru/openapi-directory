package shared

type VpcDestinationProperties struct {
	RoleArn        *string  `json:"roleArn"`
	SecurityGroups []string `json:"securityGroups"`
	SubnetIds      []string `json:"subnetIds"`
	VpcID          *string  `json:"vpcId"`
}
