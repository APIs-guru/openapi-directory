package shared

type ListFindingsResponse struct {
	Findings  []FindingSummary `json:"findings"`
	NextToken *string          `json:"nextToken,omitempty"`
}
