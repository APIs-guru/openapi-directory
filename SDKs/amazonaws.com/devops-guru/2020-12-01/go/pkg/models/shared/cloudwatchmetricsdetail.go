package shared

type CloudWatchMetricsDetail struct {
	Dimensions []CloudWatchMetricsDimension `json:"Dimensions"`
	MetricName *string                      `json:"MetricName"`
	Namespace  *string                      `json:"Namespace"`
	Period     *int64                       `json:"Period"`
	Stat       *CloudWatchMetricsStatEnum   `json:"Stat"`
	Unit       *string                      `json:"Unit"`
}
