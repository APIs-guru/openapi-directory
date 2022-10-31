package shared



type GetAggregateConfigRuleComplianceSummaryResponse struct {
    AggregateComplianceCounts []AggregateComplianceCount `json:"AggregateComplianceCounts,omitempty"`
    GroupByKey *string `json:"GroupByKey,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

