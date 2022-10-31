package shared



type GetRecommendationSummariesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    RecommendationSummaries []RecommendationSummary `json:"recommendationSummaries,omitempty"`
    
}

