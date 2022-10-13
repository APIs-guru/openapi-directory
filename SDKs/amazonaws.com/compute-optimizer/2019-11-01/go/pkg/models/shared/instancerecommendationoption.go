package shared

type InstanceRecommendationOption struct {
	InstanceType                *string                  `json:"instanceType"`
	PerformanceRisk             *float64                 `json:"performanceRisk"`
	PlatformDifferences         []PlatformDifferenceEnum `json:"platformDifferences"`
	ProjectedUtilizationMetrics []UtilizationMetric      `json:"projectedUtilizationMetrics"`
	Rank                        *int64                   `json:"rank"`
}
