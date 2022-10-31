package shared



type PrivateLinkConfig struct {
    PrivateLinkEndpoint *string `json:"PrivateLinkEndpoint,omitempty"`
    SecurityGroupArns []string `json:"SecurityGroupArns,omitempty"`
    SubnetArns []string `json:"SubnetArns,omitempty"`
    VpcEndpointID *string `json:"VpcEndpointId,omitempty"`
    
}

