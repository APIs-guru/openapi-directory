package shared

type ListEventSubscriptionsRequest struct {
	MaxResults  *int64  `json:"maxResults"`
	NextToken   *string `json:"nextToken"`
	ResourceArn *string `json:"resourceArn"`
}
