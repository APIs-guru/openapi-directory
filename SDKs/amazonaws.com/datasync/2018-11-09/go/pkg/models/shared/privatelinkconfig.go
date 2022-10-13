package shared

type PrivateLinkConfig struct {
	PrivateLinkEndpoint *string  `json:"PrivateLinkEndpoint"`
	SecurityGroupArns   []string `json:"SecurityGroupArns"`
	SubnetArns          []string `json:"SubnetArns"`
	VpcEndpointID       *string  `json:"VpcEndpointId"`
}
