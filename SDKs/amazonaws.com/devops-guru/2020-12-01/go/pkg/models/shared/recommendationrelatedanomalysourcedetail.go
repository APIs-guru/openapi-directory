package shared

type RecommendationRelatedAnomalySourceDetail struct {
	CloudWatchMetrics []RecommendationRelatedCloudWatchMetricsSourceDetail `json:"CloudWatchMetrics,omitempty"`
}
