package shared

// RecommendationRelatedCloudWatchMetricsSourceDetail
//
//	Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights.
type RecommendationRelatedCloudWatchMetricsSourceDetail struct {
	MetricName *string `json:"MetricName,omitempty"`
	Namespace  *string `json:"Namespace,omitempty"`
}
