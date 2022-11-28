package shared

// VpcDestinationConfiguration
// The configuration information for a virtual private cloud (VPC) destination.
type VpcDestinationConfiguration struct {
	RoleArn        string   `json:"roleArn"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	SubnetIds      []string `json:"subnetIds"`
	VpcID          string   `json:"vpcId"`
}
