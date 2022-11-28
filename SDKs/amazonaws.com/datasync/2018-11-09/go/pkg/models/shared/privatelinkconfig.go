package shared

// PrivateLinkConfig
// The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).
type PrivateLinkConfig struct {
	PrivateLinkEndpoint *string  `json:"PrivateLinkEndpoint,omitempty"`
	SecurityGroupArns   []string `json:"SecurityGroupArns,omitempty"`
	SubnetArns          []string `json:"SubnetArns,omitempty"`
	VpcEndpointID       *string  `json:"VpcEndpointId,omitempty"`
}
