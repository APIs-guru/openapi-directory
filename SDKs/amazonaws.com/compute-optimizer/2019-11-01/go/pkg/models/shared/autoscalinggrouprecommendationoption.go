package shared

// AutoScalingGroupRecommendationOption
// Describes a recommendation option for an Auto Scaling group.
type AutoScalingGroupRecommendationOption struct {
	Configuration               *AutoScalingGroupConfiguration `json:"configuration,omitempty"`
	PerformanceRisk             *float64                       `json:"performanceRisk,omitempty"`
	ProjectedUtilizationMetrics []UtilizationMetric            `json:"projectedUtilizationMetrics,omitempty"`
	Rank                        *int64                         `json:"rank,omitempty"`
}
