package shared

type GetEvidenceByEvidenceFolderResponse struct {
	Evidence  []Evidence `json:"evidence,omitempty"`
	NextToken *string    `json:"nextToken,omitempty"`
}
