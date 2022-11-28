package shared

// MetricToRetain
// The metric you want to retain. Dimensions are optional.
type MetricToRetain struct {
	Metric          string           `json:"metric"`
	MetricDimension *MetricDimension `json:"metricDimension,omitempty"`
}
