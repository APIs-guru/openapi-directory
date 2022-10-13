package shared

type ListAggregateDiscoveredResourcesRequest struct {
	ConfigurationAggregatorName string           `json:"ConfigurationAggregatorName"`
	Filters                     *ResourceFilters `json:"Filters"`
	Limit                       *int64           `json:"Limit"`
	NextToken                   *string          `json:"NextToken"`
	ResourceType                ResourceTypeEnum `json:"ResourceType"`
}
