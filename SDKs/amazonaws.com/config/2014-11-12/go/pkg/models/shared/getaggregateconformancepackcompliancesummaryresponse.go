package shared



type GetAggregateConformancePackComplianceSummaryResponse struct {
    AggregateConformancePackComplianceSummaries []AggregateConformancePackComplianceSummary `json:"AggregateConformancePackComplianceSummaries,omitempty"`
    GroupByKey *string `json:"GroupByKey,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

