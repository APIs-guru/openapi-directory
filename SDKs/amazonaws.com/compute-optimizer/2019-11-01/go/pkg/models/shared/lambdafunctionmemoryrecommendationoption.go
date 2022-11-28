package shared

// LambdaFunctionMemoryRecommendationOption
// Describes a recommendation option for an Lambda function.
type LambdaFunctionMemoryRecommendationOption struct {
	MemorySize                  *int64                                `json:"memorySize,omitempty"`
	ProjectedUtilizationMetrics []LambdaFunctionMemoryProjectedMetric `json:"projectedUtilizationMetrics,omitempty"`
	Rank                        *int64                                `json:"rank,omitempty"`
}
