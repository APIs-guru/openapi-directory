package shared

type GetAggregateConfigRuleComplianceSummaryResponse struct {
	AggregateComplianceCounts []AggregateComplianceCount `json:"AggregateComplianceCounts"`
	GroupByKey                *string                    `json:"GroupByKey"`
	NextToken                 *string                    `json:"NextToken"`
}
