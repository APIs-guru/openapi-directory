package shared

// SecurityDetails
// Information about endpoints.
type SecurityDetails struct {
	RoleArn          string   `json:"roleArn"`
	SecurityGroupIds []string `json:"securityGroupIds"`
	SubnetIds        []string `json:"subnetIds"`
}
