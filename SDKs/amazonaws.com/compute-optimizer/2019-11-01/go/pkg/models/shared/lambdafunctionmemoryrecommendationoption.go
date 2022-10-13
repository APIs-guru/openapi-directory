package shared

type LambdaFunctionMemoryRecommendationOption struct {
	MemorySize                  *int64                                `json:"memorySize"`
	ProjectedUtilizationMetrics []LambdaFunctionMemoryProjectedMetric `json:"projectedUtilizationMetrics"`
	Rank                        *int64                                `json:"rank"`
}
