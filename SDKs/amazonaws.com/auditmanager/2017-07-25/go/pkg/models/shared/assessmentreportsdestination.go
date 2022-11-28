package shared

// AssessmentReportsDestination
//
//	The location in which Audit Manager saves assessment reports for the given assessment.
type AssessmentReportsDestination struct {
	Destination     *string                              `json:"destination,omitempty"`
	DestinationType *AssessmentReportDestinationTypeEnum `json:"destinationType,omitempty"`
}
