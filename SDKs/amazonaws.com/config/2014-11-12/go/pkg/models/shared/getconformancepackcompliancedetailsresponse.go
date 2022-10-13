package shared

type GetConformancePackComplianceDetailsResponse struct {
	ConformancePackName                  string                            `json:"ConformancePackName"`
	ConformancePackRuleEvaluationResults []ConformancePackEvaluationResult `json:"ConformancePackRuleEvaluationResults"`
	NextToken                            *string                           `json:"NextToken"`
}
