package shared

type RecommendedOptionProjectedMetric struct {
	ProjectedMetrics        []ProjectedMetric `json:"projectedMetrics"`
	Rank                    *int64            `json:"rank"`
	RecommendedInstanceType *string           `json:"recommendedInstanceType"`
}
