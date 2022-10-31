package shared



type AssessmentReportsDestination struct {
    Destination *string `json:"destination,omitempty"`
    DestinationType *AssessmentReportDestinationTypeEnum `json:"destinationType,omitempty"`
    
}

