package shared



type ListThingRegistrationTaskReportsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ReportType *ReportTypeEnum `json:"reportType,omitempty"`
    ResourceLinks []string `json:"resourceLinks,omitempty"`
    
}

