package shared

type ListReportDefinitionsResult struct {
	NextToken         *string            `json:"nextToken"`
	ReportDefinitions []ReportDefinition `json:"reportDefinitions"`
}
