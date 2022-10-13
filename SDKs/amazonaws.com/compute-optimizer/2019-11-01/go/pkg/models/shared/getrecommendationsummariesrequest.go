package shared

type GetRecommendationSummariesRequest struct {
	AccountIds []string `json:"accountIds"`
	MaxResults *int64   `json:"maxResults"`
	NextToken  *string  `json:"nextToken"`
}
