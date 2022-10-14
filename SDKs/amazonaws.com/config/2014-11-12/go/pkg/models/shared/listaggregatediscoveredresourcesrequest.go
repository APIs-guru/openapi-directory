package shared

type ListAggregateDiscoveredResourcesRequest struct {
	ConfigurationAggregatorName string           `json:"ConfigurationAggregatorName"`
	Filters                     *ResourceFilters `json:"Filters,omitempty"`
	Limit                       *int64           `json:"Limit,omitempty"`
	NextToken                   *string          `json:"NextToken,omitempty"`
	ResourceType                ResourceTypeEnum `json:"ResourceType"`
}
