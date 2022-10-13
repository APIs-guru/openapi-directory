package shared

type AssessmentReportEvidenceError struct {
	ErrorCode    *string `json:"errorCode"`
	ErrorMessage *string `json:"errorMessage"`
	EvidenceID   *string `json:"evidenceId"`
}
