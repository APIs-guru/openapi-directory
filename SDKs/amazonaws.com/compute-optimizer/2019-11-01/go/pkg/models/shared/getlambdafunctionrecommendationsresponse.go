package shared

type GetLambdaFunctionRecommendationsResponse struct {
	LambdaFunctionRecommendations []LambdaFunctionRecommendation `json:"lambdaFunctionRecommendations"`
	NextToken                     *string                        `json:"nextToken"`
}
