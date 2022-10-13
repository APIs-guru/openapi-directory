package shared

type AssessmentReportsDestination struct {
	Destination     *string                              `json:"destination"`
	DestinationType *AssessmentReportDestinationTypeEnum `json:"destinationType"`
}
