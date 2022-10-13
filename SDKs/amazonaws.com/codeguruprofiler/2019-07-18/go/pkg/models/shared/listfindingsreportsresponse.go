package shared

type ListFindingsReportsResponse struct {
	FindingsReportSummaries []FindingsReportSummary `json:"findingsReportSummaries"`
	NextToken               *string                 `json:"nextToken"`
}
