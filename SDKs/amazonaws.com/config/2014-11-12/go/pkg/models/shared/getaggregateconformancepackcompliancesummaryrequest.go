package shared

type GetAggregateConformancePackComplianceSummaryRequest struct {
	ConfigurationAggregatorName string                                                 `json:"ConfigurationAggregatorName"`
	Filters                     *AggregateConformancePackComplianceSummaryFilters      `json:"Filters"`
	GroupByKey                  *AggregateConformancePackComplianceSummaryGroupKeyEnum `json:"GroupByKey"`
	Limit                       *int64                                                 `json:"Limit"`
	NextToken                   *string                                                `json:"NextToken"`
}
