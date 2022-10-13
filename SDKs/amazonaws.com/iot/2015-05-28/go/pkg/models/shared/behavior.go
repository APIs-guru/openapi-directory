package shared

type Behavior struct {
	Criteria        *BehaviorCriteria `json:"criteria"`
	Metric          *string           `json:"metric"`
	MetricDimension *MetricDimension  `json:"metricDimension"`
	Name            string            `json:"name"`
	SuppressAlerts  *bool             `json:"suppressAlerts"`
}
