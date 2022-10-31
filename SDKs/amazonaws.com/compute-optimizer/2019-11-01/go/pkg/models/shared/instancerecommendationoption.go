package shared



type InstanceRecommendationOption struct {
    InstanceType *string `json:"instanceType,omitempty"`
    PerformanceRisk *float64 `json:"performanceRisk,omitempty"`
    PlatformDifferences []PlatformDifferenceEnum `json:"platformDifferences,omitempty"`
    ProjectedUtilizationMetrics []UtilizationMetric `json:"projectedUtilizationMetrics,omitempty"`
    Rank *int64 `json:"rank,omitempty"`
    
}

