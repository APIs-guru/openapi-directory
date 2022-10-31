package shared



type RecommendedOptionProjectedMetric struct {
    ProjectedMetrics []ProjectedMetric `json:"projectedMetrics,omitempty"`
    Rank *int64 `json:"rank,omitempty"`
    RecommendedInstanceType *string `json:"recommendedInstanceType,omitempty"`
    
}

