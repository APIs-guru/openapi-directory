package shared

type Behavior struct {
	Criteria        *BehaviorCriteria `json:"criteria,omitempty"`
	Metric          *string           `json:"metric,omitempty"`
	MetricDimension *MetricDimension  `json:"metricDimension,omitempty"`
	Name            string            `json:"name"`
	SuppressAlerts  *bool             `json:"suppressAlerts,omitempty"`
}
