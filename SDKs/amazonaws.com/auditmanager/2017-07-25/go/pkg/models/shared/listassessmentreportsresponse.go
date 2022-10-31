package shared



type ListAssessmentReportsResponse struct {
    AssessmentReports []AssessmentReportMetadata `json:"assessmentReports,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

