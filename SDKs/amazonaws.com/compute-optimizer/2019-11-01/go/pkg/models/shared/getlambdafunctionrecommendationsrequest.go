package shared

type GetLambdaFunctionRecommendationsRequest struct {
	AccountIds   []string                             `json:"accountIds"`
	Filters      []LambdaFunctionRecommendationFilter `json:"filters"`
	FunctionArns []string                             `json:"functionArns"`
	MaxResults   *int64                               `json:"maxResults"`
	NextToken    *string                              `json:"nextToken"`
}
