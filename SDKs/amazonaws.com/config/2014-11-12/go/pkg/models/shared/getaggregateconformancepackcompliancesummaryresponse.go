package shared

type GetAggregateConformancePackComplianceSummaryResponse struct {
	AggregateConformancePackComplianceSummaries []AggregateConformancePackComplianceSummary `json:"AggregateConformancePackComplianceSummaries"`
	GroupByKey                                  *string                                     `json:"GroupByKey"`
	NextToken                                   *string                                     `json:"NextToken"`
}
