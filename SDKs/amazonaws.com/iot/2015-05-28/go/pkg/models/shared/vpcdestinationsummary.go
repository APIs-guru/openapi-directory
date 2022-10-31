package shared

type VpcDestinationSummary struct {
	RoleArn        *string  `json:"roleArn,omitempty"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	SubnetIds      []string `json:"subnetIds,omitempty"`
	VpcID          *string  `json:"vpcId,omitempty"`
}
