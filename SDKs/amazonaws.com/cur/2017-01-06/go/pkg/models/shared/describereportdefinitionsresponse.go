package shared

type DescribeReportDefinitionsResponse struct {
	NextToken         *string            `json:"NextToken"`
	ReportDefinitions []ReportDefinition `json:"ReportDefinitions"`
}
