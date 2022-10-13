package shared

type ListClustersRequest struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
