package shared

type BatchImportEvidenceToAssessmentControlError struct {
	ErrorCode      *string         `json:"errorCode,omitempty"`
	ErrorMessage   *string         `json:"errorMessage,omitempty"`
	ManualEvidence *ManualEvidence `json:"manualEvidence,omitempty"`
}
