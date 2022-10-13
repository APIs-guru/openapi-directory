package shared

type GetComplianceDetailsByResourceResponse struct {
	EvaluationResults []EvaluationResult `json:"EvaluationResults"`
	NextToken         *string            `json:"NextToken"`
}
