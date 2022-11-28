package shared

// MetricDimension
// Describes the dimension names and values associated with a metric.
type MetricDimension struct {
	Name  string `json:"Name"`
	Value string `json:"Value"`
}
