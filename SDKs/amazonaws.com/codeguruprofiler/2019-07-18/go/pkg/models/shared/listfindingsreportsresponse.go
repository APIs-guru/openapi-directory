package shared

// ListFindingsReportsResponse
// The structure representing the ListFindingsReportsResponse.
type ListFindingsReportsResponse struct {
	FindingsReportSummaries []FindingsReportSummary `json:"findingsReportSummaries"`
	NextToken               *string                 `json:"nextToken,omitempty"`
}
