package shared

type CreateCustomRoutingEndpointGroupRequest struct {
	DestinationConfigurations []CustomRoutingDestinationConfiguration `json:"DestinationConfigurations"`
	EndpointGroupRegion       string                                  `json:"EndpointGroupRegion"`
	IdempotencyToken          string                                  `json:"IdempotencyToken"`
	ListenerArn               string                                  `json:"ListenerArn"`
}
