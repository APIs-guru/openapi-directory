package shared

type DescribeAggregateComplianceByConfigRulesResponse struct {
	AggregateComplianceByConfigRules []AggregateComplianceByConfigRule `json:"AggregateComplianceByConfigRules,omitempty"`
	NextToken                        *string                           `json:"NextToken,omitempty"`
}
