package shared

type BatchAssociateAssessmentReportEvidenceResponse struct {
	Errors      []AssessmentReportEvidenceError `json:"errors"`
	EvidenceIds []string                        `json:"evidenceIds"`
}
