package shared

// CustomRoutingEndpointGroup
// A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener.
type CustomRoutingEndpointGroup struct {
	DestinationDescriptions []CustomRoutingDestinationDescription `json:"DestinationDescriptions,omitempty"`
	EndpointDescriptions    []CustomRoutingEndpointDescription    `json:"EndpointDescriptions,omitempty"`
	EndpointGroupArn        *string                               `json:"EndpointGroupArn,omitempty"`
	EndpointGroupRegion     *string                               `json:"EndpointGroupRegion,omitempty"`
}
