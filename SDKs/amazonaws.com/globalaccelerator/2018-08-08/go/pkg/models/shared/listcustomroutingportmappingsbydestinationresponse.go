package shared



type ListCustomRoutingPortMappingsByDestinationResponse struct {
    DestinationPortMappings []DestinationPortMapping `json:"DestinationPortMappings,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

