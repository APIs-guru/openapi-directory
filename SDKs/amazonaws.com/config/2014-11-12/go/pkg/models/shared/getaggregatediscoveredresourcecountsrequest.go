package shared



type GetAggregateDiscoveredResourceCountsRequest struct {
    ConfigurationAggregatorName string `json:"ConfigurationAggregatorName"`
    Filters *ResourceCountFilters `json:"Filters,omitempty"`
    GroupByKey *ResourceCountGroupKeyEnum `json:"GroupByKey,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

