package shared

type GetConformancePackComplianceDetailsRequest struct {
	ConformancePackName string                            `json:"ConformancePackName"`
	Filters             *ConformancePackEvaluationFilters `json:"Filters"`
	Limit               *int64                            `json:"Limit"`
	NextToken           *string                           `json:"NextToken"`
}
