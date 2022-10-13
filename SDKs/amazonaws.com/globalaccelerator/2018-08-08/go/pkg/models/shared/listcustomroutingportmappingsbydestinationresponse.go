package shared

type ListCustomRoutingPortMappingsByDestinationResponse struct {
	DestinationPortMappings []DestinationPortMapping `json:"DestinationPortMappings"`
	NextToken               *string                  `json:"NextToken"`
}
