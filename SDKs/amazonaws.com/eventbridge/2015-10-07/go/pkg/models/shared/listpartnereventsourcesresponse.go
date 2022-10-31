package shared



type ListPartnerEventSourcesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PartnerEventSources []PartnerEventSource `json:"PartnerEventSources,omitempty"`
    
}

