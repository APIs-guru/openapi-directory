package shared

type DescribeConformancePackComplianceRequest struct {
	ConformancePackName string                            `json:"ConformancePackName"`
	Filters             *ConformancePackComplianceFilters `json:"Filters"`
	Limit               *int64                            `json:"Limit"`
	NextToken           *string                           `json:"NextToken"`
}
