package shared



type BatchAssociateAssessmentReportEvidenceResponse struct {
    Errors []AssessmentReportEvidenceError `json:"errors,omitempty"`
    EvidenceIds []string `json:"evidenceIds,omitempty"`
    
}

