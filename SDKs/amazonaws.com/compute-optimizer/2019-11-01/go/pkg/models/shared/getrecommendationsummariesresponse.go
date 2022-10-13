package shared

type GetRecommendationSummariesResponse struct {
	NextToken               *string                 `json:"nextToken"`
	RecommendationSummaries []RecommendationSummary `json:"recommendationSummaries"`
}
