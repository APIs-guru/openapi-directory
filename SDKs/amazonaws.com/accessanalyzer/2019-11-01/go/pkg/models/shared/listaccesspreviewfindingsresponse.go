package shared

type ListAccessPreviewFindingsResponse struct {
	Findings  []AccessPreviewFinding `json:"findings"`
	NextToken *string                `json:"nextToken"`
}
