package shared

// NetworkConfiguration
// An object representing the network configuration for a task or service.
type NetworkConfiguration struct {
	AwsvpcConfiguration *AwsVpcConfiguration `json:"awsvpcConfiguration,omitempty"`
}
