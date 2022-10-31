package shared



type GetComplianceDetailsByResourceResponse struct {
    EvaluationResults []EvaluationResult `json:"EvaluationResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

