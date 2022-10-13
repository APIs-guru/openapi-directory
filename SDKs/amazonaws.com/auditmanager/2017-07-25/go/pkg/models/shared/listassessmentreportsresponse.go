package shared

type ListAssessmentReportsResponse struct {
	AssessmentReports []AssessmentReportMetadata `json:"assessmentReports"`
	NextToken         *string                    `json:"nextToken"`
}
