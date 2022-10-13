package shared

type DescribeAggregateComplianceByConfigRulesResponse struct {
	AggregateComplianceByConfigRules []AggregateComplianceByConfigRule `json:"AggregateComplianceByConfigRules"`
	NextToken                        *string                           `json:"NextToken"`
}
