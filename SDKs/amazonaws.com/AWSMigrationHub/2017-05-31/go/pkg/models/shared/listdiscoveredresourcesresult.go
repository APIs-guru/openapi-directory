package shared



type ListDiscoveredResourcesResult struct {
    DiscoveredResourceList []DiscoveredResource `json:"DiscoveredResourceList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

