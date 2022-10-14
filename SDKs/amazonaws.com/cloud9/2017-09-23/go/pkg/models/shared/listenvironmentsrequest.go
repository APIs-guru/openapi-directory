package shared

type ListEnvironmentsRequest struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}
