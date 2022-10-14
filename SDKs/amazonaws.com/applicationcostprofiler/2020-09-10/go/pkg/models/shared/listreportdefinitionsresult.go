package shared

type ListReportDefinitionsResult struct {
	NextToken         *string            `json:"nextToken,omitempty"`
	ReportDefinitions []ReportDefinition `json:"reportDefinitions,omitempty"`
}
