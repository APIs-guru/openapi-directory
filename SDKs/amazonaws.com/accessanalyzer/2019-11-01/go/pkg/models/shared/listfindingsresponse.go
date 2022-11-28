package shared

// ListFindingsResponse
// The response to the request.
type ListFindingsResponse struct {
	Findings  []FindingSummary `json:"findings"`
	NextToken *string          `json:"nextToken,omitempty"`
}
