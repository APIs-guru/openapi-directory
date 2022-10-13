package shared

type GetEvidenceFoldersByAssessmentResponse struct {
	EvidenceFolders []AssessmentEvidenceFolder `json:"evidenceFolders"`
	NextToken       *string                    `json:"nextToken"`
}
