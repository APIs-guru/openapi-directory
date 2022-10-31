package shared



type ListAggregateDiscoveredResourcesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceIdentifiers []AggregateResourceIdentifier `json:"ResourceIdentifiers,omitempty"`
    
}

