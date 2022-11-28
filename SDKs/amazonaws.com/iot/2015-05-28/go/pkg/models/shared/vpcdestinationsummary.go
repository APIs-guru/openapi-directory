package shared

// VpcDestinationSummary
// The summary of a virtual private cloud (VPC) destination.
type VpcDestinationSummary struct {
	RoleArn        *string  `json:"roleArn,omitempty"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	SubnetIds      []string `json:"subnetIds,omitempty"`
	VpcID          *string  `json:"vpcId,omitempty"`
}
