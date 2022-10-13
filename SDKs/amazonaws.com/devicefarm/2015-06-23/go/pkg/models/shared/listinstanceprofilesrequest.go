package shared

type ListInstanceProfilesRequest struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
