package shared



type ListRecommendationsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    RecommendationSummaries []RecommendationSummary `json:"RecommendationSummaries,omitempty"`
    
}

