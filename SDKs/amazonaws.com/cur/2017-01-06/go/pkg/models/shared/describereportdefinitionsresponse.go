package shared

type DescribeReportDefinitionsResponse struct {
	NextToken         *string            `json:"NextToken,omitempty"`
	ReportDefinitions []ReportDefinition `json:"ReportDefinitions,omitempty"`
}
