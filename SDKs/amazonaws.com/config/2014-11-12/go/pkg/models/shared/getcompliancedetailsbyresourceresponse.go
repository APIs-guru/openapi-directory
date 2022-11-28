package shared

// GetComplianceDetailsByResourceResponse
// <p/>
type GetComplianceDetailsByResourceResponse struct {
	EvaluationResults []EvaluationResult `json:"EvaluationResults,omitempty"`
	NextToken         *string            `json:"NextToken,omitempty"`
}
