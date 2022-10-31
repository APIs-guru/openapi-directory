package shared

type ListRecommendationFeedbackResponse struct {
	NextToken                       *string                         `json:"NextToken,omitempty"`
	RecommendationFeedbackSummaries []RecommendationFeedbackSummary `json:"RecommendationFeedbackSummaries,omitempty"`
}
