package shared



type CustomRoutingEndpointGroup struct {
    DestinationDescriptions []CustomRoutingDestinationDescription `json:"DestinationDescriptions,omitempty"`
    EndpointDescriptions []CustomRoutingEndpointDescription `json:"EndpointDescriptions,omitempty"`
    EndpointGroupArn *string `json:"EndpointGroupArn,omitempty"`
    EndpointGroupRegion *string `json:"EndpointGroupRegion,omitempty"`
    
}

