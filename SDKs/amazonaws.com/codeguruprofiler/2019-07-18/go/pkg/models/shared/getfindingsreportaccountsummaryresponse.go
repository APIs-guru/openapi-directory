package shared

type GetFindingsReportAccountSummaryResponse struct {
	NextToken       *string                 `json:"nextToken"`
	ReportSummaries []FindingsReportSummary `json:"reportSummaries"`
}
