package shared

type GetRecommendationSummariesRequest struct {
	AccountIds []string `json:"accountIds,omitempty"`
	MaxResults *int64   `json:"maxResults,omitempty"`
	NextToken  *string  `json:"nextToken,omitempty"`
}
