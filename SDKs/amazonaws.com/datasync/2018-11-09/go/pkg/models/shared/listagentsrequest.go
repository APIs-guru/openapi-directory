package shared

// ListAgentsRequest
// ListAgentsRequest
type ListAgentsRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
