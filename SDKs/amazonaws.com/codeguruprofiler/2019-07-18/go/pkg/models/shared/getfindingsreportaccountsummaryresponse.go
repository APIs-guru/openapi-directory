package shared

type GetFindingsReportAccountSummaryResponse struct {
	NextToken       *string                 `json:"nextToken,omitempty"`
	ReportSummaries []FindingsReportSummary `json:"reportSummaries"`
}
