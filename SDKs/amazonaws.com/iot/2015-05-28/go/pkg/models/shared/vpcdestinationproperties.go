package shared

// VpcDestinationProperties
// The properties of a virtual private cloud (VPC) destination.
type VpcDestinationProperties struct {
	RoleArn        *string  `json:"roleArn,omitempty"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	SubnetIds      []string `json:"subnetIds,omitempty"`
	VpcID          *string  `json:"vpcId,omitempty"`
}
