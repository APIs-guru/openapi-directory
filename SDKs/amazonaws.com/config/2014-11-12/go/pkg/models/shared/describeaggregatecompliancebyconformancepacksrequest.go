package shared

type DescribeAggregateComplianceByConformancePacksRequest struct {
	ConfigurationAggregatorName string                                     `json:"ConfigurationAggregatorName"`
	Filters                     *AggregateConformancePackComplianceFilters `json:"Filters,omitempty"`
	Limit                       *int64                                     `json:"Limit,omitempty"`
	NextToken                   *string                                    `json:"NextToken,omitempty"`
}
