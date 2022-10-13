package shared

type ListProjectsRequest struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
