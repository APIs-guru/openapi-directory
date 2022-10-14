package shared

type AssessmentReportEvidenceError struct {
	ErrorCode    *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	EvidenceID   *string `json:"evidenceId,omitempty"`
}
