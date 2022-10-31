package shared



type ListCustomRoutingPortMappingsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PortMappings []PortMapping `json:"PortMappings,omitempty"`
    
}

