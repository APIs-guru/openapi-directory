package shared

type MetricStatisticEnum string

const (
	MetricStatisticEnumAverage     MetricStatisticEnum = "Average"
	MetricStatisticEnumMinimum     MetricStatisticEnum = "Minimum"
	MetricStatisticEnumMaximum     MetricStatisticEnum = "Maximum"
	MetricStatisticEnumSampleCount MetricStatisticEnum = "SampleCount"
	MetricStatisticEnumSum         MetricStatisticEnum = "Sum"
)
