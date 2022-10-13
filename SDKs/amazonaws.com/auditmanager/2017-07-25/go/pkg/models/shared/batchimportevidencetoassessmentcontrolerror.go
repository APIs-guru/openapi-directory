package shared

type BatchImportEvidenceToAssessmentControlError struct {
	ErrorCode      *string         `json:"errorCode"`
	ErrorMessage   *string         `json:"errorMessage"`
	ManualEvidence *ManualEvidence `json:"manualEvidence"`
}
