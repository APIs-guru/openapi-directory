package shared

type GetConformancePackComplianceSummaryResponse struct {
	ConformancePackComplianceSummaryList []ConformancePackComplianceSummary `json:"ConformancePackComplianceSummaryList"`
	NextToken                            *string                            `json:"NextToken"`
}
