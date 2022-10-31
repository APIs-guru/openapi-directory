package shared



type GetDiscoveredResourceCountsRequest struct {
    Limit *int64 `json:"limit,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceTypes []string `json:"resourceTypes,omitempty"`
    
}

