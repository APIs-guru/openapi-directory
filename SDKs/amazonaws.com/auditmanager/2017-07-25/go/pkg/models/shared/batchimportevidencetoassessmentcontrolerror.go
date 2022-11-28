package shared

// BatchImportEvidenceToAssessmentControlError
//
//	An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.
type BatchImportEvidenceToAssessmentControlError struct {
	ErrorCode      *string         `json:"errorCode,omitempty"`
	ErrorMessage   *string         `json:"errorMessage,omitempty"`
	ManualEvidence *ManualEvidence `json:"manualEvidence,omitempty"`
}
