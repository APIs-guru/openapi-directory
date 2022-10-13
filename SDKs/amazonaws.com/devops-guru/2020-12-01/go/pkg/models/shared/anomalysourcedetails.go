package shared

type AnomalySourceDetails struct {
	CloudWatchMetrics []CloudWatchMetricsDetail `json:"CloudWatchMetrics"`
}
