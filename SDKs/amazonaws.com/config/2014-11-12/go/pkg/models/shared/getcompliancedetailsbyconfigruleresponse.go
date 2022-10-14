package shared

type GetComplianceDetailsByConfigRuleResponse struct {
	EvaluationResults []EvaluationResult `json:"EvaluationResults,omitempty"`
	NextToken         *string            `json:"NextToken,omitempty"`
}
