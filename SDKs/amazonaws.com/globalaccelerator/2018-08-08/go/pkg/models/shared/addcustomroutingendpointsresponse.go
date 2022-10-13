package shared

type AddCustomRoutingEndpointsResponse struct {
	EndpointDescriptions []CustomRoutingEndpointDescription `json:"EndpointDescriptions"`
	EndpointGroupArn     *string                            `json:"EndpointGroupArn"`
}
