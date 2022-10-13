package shared

type AddCustomRoutingEndpointsRequest struct {
	EndpointConfigurations []CustomRoutingEndpointConfiguration `json:"EndpointConfigurations"`
	EndpointGroupArn       string                               `json:"EndpointGroupArn"`
}
