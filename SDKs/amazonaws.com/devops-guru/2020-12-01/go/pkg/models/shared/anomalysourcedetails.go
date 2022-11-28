package shared

// AnomalySourceDetails
//
//	Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
type AnomalySourceDetails struct {
	CloudWatchMetrics []CloudWatchMetricsDetail `json:"CloudWatchMetrics,omitempty"`
}
