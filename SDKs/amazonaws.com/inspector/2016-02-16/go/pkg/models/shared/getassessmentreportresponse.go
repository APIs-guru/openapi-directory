package shared

type GetAssessmentReportResponse struct {
	Status ReportStatusEnum `json:"status"`
	URL    *string          `json:"url,omitempty"`
}
