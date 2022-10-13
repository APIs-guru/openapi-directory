package shared

type GetAggregateComplianceDetailsByConfigRuleResponse struct {
	AggregateEvaluationResults []AggregateEvaluationResult `json:"AggregateEvaluationResults"`
	NextToken                  *string                     `json:"NextToken"`
}
