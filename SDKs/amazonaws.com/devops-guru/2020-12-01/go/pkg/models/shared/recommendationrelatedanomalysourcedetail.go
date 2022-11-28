package shared

// RecommendationRelatedAnomalySourceDetail
//
//	Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric.
type RecommendationRelatedAnomalySourceDetail struct {
	CloudWatchMetrics []RecommendationRelatedCloudWatchMetricsSourceDetail `json:"CloudWatchMetrics,omitempty"`
}
