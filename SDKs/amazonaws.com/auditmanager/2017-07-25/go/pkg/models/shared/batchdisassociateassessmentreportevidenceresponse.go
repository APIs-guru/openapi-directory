package shared

type BatchDisassociateAssessmentReportEvidenceResponse struct {
	Errors      []AssessmentReportEvidenceError `json:"errors"`
	EvidenceIds []string                        `json:"evidenceIds"`
}
