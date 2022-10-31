package shared



type GetEvidenceFoldersByAssessmentControlResponse struct {
    EvidenceFolders []AssessmentEvidenceFolder `json:"evidenceFolders,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

