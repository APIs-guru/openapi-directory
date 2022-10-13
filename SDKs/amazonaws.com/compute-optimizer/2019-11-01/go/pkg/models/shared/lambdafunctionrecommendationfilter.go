package shared

type LambdaFunctionRecommendationFilter struct {
	Name   *LambdaFunctionRecommendationFilterNameEnum `json:"name"`
	Values []string                                    `json:"values"`
}
