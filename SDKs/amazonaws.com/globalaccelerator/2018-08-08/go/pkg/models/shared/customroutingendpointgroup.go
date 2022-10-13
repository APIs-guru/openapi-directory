package shared

type CustomRoutingEndpointGroup struct {
	DestinationDescriptions []CustomRoutingDestinationDescription `json:"DestinationDescriptions"`
	EndpointDescriptions    []CustomRoutingEndpointDescription    `json:"EndpointDescriptions"`
	EndpointGroupArn        *string                               `json:"EndpointGroupArn"`
	EndpointGroupRegion     *string                               `json:"EndpointGroupRegion"`
}
