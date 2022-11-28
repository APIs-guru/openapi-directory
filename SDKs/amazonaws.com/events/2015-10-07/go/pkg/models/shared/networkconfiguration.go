package shared

// NetworkConfiguration
// This structure specifies the network configuration for an ECS task.
type NetworkConfiguration struct {
	AwsvpcConfiguration *AwsVpcConfiguration `json:"awsvpcConfiguration,omitempty"`
}
