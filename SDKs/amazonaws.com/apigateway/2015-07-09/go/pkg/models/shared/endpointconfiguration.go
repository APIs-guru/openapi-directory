package shared

type EndpointConfiguration struct {
	Types          []EndpointTypeEnum `json:"types,omitempty"`
	VpcEndpointIds []string           `json:"vpcEndpointIds,omitempty"`
}
