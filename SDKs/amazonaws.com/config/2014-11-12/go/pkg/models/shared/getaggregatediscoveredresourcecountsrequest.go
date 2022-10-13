package shared

type GetAggregateDiscoveredResourceCountsRequest struct {
	ConfigurationAggregatorName string                     `json:"ConfigurationAggregatorName"`
	Filters                     *ResourceCountFilters      `json:"Filters"`
	GroupByKey                  *ResourceCountGroupKeyEnum `json:"GroupByKey"`
	Limit                       *int64                     `json:"Limit"`
	NextToken                   *string                    `json:"NextToken"`
}
