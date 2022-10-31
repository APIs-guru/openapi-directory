package shared

type CloudWatchMetricsStatEnum string

const (
	CloudWatchMetricsStatEnumSum         CloudWatchMetricsStatEnum = "Sum"
	CloudWatchMetricsStatEnumAverage     CloudWatchMetricsStatEnum = "Average"
	CloudWatchMetricsStatEnumSampleCount CloudWatchMetricsStatEnum = "SampleCount"
	CloudWatchMetricsStatEnumMinimum     CloudWatchMetricsStatEnum = "Minimum"
	CloudWatchMetricsStatEnumMaximum     CloudWatchMetricsStatEnum = "Maximum"
	CloudWatchMetricsStatEnumP99         CloudWatchMetricsStatEnum = "p99"
	CloudWatchMetricsStatEnumP90         CloudWatchMetricsStatEnum = "p90"
	CloudWatchMetricsStatEnumP50         CloudWatchMetricsStatEnum = "p50"
)
