package shared



type GetAssessmentReportRequest struct {
    AssessmentRunArn string `json:"assessmentRunArn"`
    ReportFileFormat ReportFileFormatEnum `json:"reportFileFormat"`
    ReportType ReportTypeEnum `json:"reportType"`
    
}

