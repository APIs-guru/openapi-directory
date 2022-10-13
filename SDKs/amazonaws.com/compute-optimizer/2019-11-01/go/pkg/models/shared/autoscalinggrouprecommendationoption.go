package shared

type AutoScalingGroupRecommendationOption struct {
	Configuration               *AutoScalingGroupConfiguration `json:"configuration"`
	PerformanceRisk             *float64                       `json:"performanceRisk"`
	ProjectedUtilizationMetrics []UtilizationMetric            `json:"projectedUtilizationMetrics"`
	Rank                        *int64                         `json:"rank"`
}
