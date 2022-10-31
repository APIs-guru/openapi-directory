package shared



type GetDiscoveredResourceCountsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ResourceCounts []ResourceCount `json:"resourceCounts,omitempty"`
    TotalDiscoveredResources *int64 `json:"totalDiscoveredResources,omitempty"`
    
}

