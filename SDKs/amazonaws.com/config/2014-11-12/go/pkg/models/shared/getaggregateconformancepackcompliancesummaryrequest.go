package shared

type GetAggregateConformancePackComplianceSummaryRequest struct {
	ConfigurationAggregatorName string                                                 `json:"ConfigurationAggregatorName"`
	Filters                     *AggregateConformancePackComplianceSummaryFilters      `json:"Filters,omitempty"`
	GroupByKey                  *AggregateConformancePackComplianceSummaryGroupKeyEnum `json:"GroupByKey,omitempty"`
	Limit                       *int64                                                 `json:"Limit,omitempty"`
	NextToken                   *string                                                `json:"NextToken,omitempty"`
}
