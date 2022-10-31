package shared

type BatchDisassociateAssessmentReportEvidenceResponse struct {
	Errors      []AssessmentReportEvidenceError `json:"errors,omitempty"`
	EvidenceIds []string                        `json:"evidenceIds,omitempty"`
}
