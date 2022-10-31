package shared



type GetEvidenceFoldersByAssessmentResponse struct {
    EvidenceFolders []AssessmentEvidenceFolder `json:"evidenceFolders,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

