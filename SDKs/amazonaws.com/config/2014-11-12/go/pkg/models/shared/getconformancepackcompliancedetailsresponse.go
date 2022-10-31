package shared



type GetConformancePackComplianceDetailsResponse struct {
    ConformancePackName string `json:"ConformancePackName"`
    ConformancePackRuleEvaluationResults []ConformancePackEvaluationResult `json:"ConformancePackRuleEvaluationResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

