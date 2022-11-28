package shared

// DescribeReportDefinitionsResponse
// If the action is successful, the service sends back an HTTP 200 response.
type DescribeReportDefinitionsResponse struct {
	NextToken         *string            `json:"NextToken,omitempty"`
	ReportDefinitions []ReportDefinition `json:"ReportDefinitions,omitempty"`
}
