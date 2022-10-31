package shared

type GetConformancePackComplianceSummaryResponse struct {
	ConformancePackComplianceSummaryList []ConformancePackComplianceSummary `json:"ConformancePackComplianceSummaryList,omitempty"`
	NextToken                            *string                            `json:"NextToken,omitempty"`
}
