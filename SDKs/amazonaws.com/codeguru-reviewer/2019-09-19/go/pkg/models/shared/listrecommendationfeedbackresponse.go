package shared

type ListRecommendationFeedbackResponse struct {
	NextToken                       *string                         `json:"NextToken"`
	RecommendationFeedbackSummaries []RecommendationFeedbackSummary `json:"RecommendationFeedbackSummaries"`
}
