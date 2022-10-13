package shared

type GetAggregateDiscoveredResourceCountsResponse struct {
	GroupByKey               *string                `json:"GroupByKey"`
	GroupedResourceCounts    []GroupedResourceCount `json:"GroupedResourceCounts"`
	NextToken                *string                `json:"NextToken"`
	TotalDiscoveredResources int64                  `json:"TotalDiscoveredResources"`
}
