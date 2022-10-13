package shared

type GetEvidenceByEvidenceFolderResponse struct {
	Evidence  []Evidence `json:"evidence"`
	NextToken *string    `json:"nextToken"`
}
