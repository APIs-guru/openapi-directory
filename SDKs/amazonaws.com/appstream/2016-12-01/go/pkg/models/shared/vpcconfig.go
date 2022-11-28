package shared

// VpcConfig
// Describes VPC configuration information for fleets and image builders.
type VpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}
