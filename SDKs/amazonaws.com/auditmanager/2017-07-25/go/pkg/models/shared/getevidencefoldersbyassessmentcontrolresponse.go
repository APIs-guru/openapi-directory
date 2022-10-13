package shared

type GetEvidenceFoldersByAssessmentControlResponse struct {
	EvidenceFolders []AssessmentEvidenceFolder `json:"evidenceFolders"`
	NextToken       *string                    `json:"nextToken"`
}
