package shared

type GetAggregateComplianceDetailsByConfigRuleResponse struct {
	AggregateEvaluationResults []AggregateEvaluationResult `json:"AggregateEvaluationResults,omitempty"`
	NextToken                  *string                     `json:"NextToken,omitempty"`
}
