package shared

// AssessmentReportEvidenceError
//
//	An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message.
type AssessmentReportEvidenceError struct {
	ErrorCode    *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	EvidenceID   *string `json:"evidenceId,omitempty"`
}
