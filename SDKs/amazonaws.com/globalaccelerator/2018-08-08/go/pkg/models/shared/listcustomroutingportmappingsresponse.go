package shared

type ListCustomRoutingPortMappingsResponse struct {
	NextToken    *string       `json:"NextToken"`
	PortMappings []PortMapping `json:"PortMappings"`
}
