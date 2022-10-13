package shared

type ListRecommendationsResponse struct {
	NextToken               *string                 `json:"NextToken"`
	RecommendationSummaries []RecommendationSummary `json:"RecommendationSummaries"`
}
