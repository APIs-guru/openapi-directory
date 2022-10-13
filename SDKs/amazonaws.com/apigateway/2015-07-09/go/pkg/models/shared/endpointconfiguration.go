package shared

type EndpointConfiguration struct {
	Types          []EndpointTypeEnum `json:"types"`
	VpcEndpointIds []string           `json:"vpcEndpointIds"`
}
