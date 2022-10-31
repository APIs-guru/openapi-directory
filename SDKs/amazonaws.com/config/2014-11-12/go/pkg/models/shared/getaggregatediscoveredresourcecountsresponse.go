package shared



type GetAggregateDiscoveredResourceCountsResponse struct {
    GroupByKey *string `json:"GroupByKey,omitempty"`
    GroupedResourceCounts []GroupedResourceCount `json:"GroupedResourceCounts,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TotalDiscoveredResources int64 `json:"TotalDiscoveredResources"`
    
}

