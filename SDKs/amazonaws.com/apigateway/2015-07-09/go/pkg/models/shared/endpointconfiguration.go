package shared

// EndpointConfiguration
// The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
type EndpointConfiguration struct {
	Types          []EndpointTypeEnum `json:"types,omitempty"`
	VpcEndpointIds []string           `json:"vpcEndpointIds,omitempty"`
}
