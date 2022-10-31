package shared

type GetLambdaFunctionRecommendationsResponse struct {
	LambdaFunctionRecommendations []LambdaFunctionRecommendation `json:"lambdaFunctionRecommendations,omitempty"`
	NextToken                     *string                        `json:"nextToken,omitempty"`
}
