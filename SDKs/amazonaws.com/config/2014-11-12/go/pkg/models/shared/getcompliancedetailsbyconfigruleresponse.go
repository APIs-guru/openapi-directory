package shared

type GetComplianceDetailsByConfigRuleResponse struct {
	EvaluationResults []EvaluationResult `json:"EvaluationResults"`
	NextToken         *string            `json:"NextToken"`
}
