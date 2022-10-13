package shared

type DescribeAggregateComplianceByConformancePacksRequest struct {
	ConfigurationAggregatorName string                                     `json:"ConfigurationAggregatorName"`
	Filters                     *AggregateConformancePackComplianceFilters `json:"Filters"`
	Limit                       *int64                                     `json:"Limit"`
	NextToken                   *string                                    `json:"NextToken"`
}
