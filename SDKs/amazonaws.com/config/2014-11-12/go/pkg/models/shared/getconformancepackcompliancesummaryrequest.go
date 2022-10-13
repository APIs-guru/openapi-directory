package shared

type GetConformancePackComplianceSummaryRequest struct {
	ConformancePackNames []string `json:"ConformancePackNames"`
	Limit                *int64   `json:"Limit"`
	NextToken            *string  `json:"NextToken"`
}
