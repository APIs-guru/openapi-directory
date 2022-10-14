package shared

type LambdaFunctionRecommendationFilter struct {
	Name   *LambdaFunctionRecommendationFilterNameEnum `json:"name,omitempty"`
	Values []string                                    `json:"values,omitempty"`
}
