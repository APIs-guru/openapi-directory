package shared

// CloudWatchMetricsDetail
//
//	Information about an Amazon CloudWatch metric.
type CloudWatchMetricsDetail struct {
	Dimensions []CloudWatchMetricsDimension `json:"Dimensions,omitempty"`
	MetricName *string                      `json:"MetricName,omitempty"`
	Namespace  *string                      `json:"Namespace,omitempty"`
	Period     *int64                       `json:"Period,omitempty"`
	Stat       *CloudWatchMetricsStatEnum   `json:"Stat,omitempty"`
	Unit       *string                      `json:"Unit,omitempty"`
}
