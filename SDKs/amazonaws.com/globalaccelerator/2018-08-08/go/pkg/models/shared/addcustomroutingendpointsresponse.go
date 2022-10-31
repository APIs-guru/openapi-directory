package shared



type AddCustomRoutingEndpointsResponse struct {
    EndpointDescriptions []CustomRoutingEndpointDescription `json:"EndpointDescriptions,omitempty"`
    EndpointGroupArn *string `json:"EndpointGroupArn,omitempty"`
    
}

