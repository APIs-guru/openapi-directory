package shared

// DirectoryVpcSettings
// Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
type DirectoryVpcSettings struct {
	SubnetIds []string `json:"SubnetIds"`
	VpcID     string   `json:"VpcId"`
}
