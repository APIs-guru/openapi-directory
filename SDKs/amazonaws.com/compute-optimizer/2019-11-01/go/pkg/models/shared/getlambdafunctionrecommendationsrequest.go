package shared



type GetLambdaFunctionRecommendationsRequest struct {
    AccountIds []string `json:"accountIds,omitempty"`
    Filters []LambdaFunctionRecommendationFilter `json:"filters,omitempty"`
    FunctionArns []string `json:"functionArns,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

