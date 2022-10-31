package shared

type PredefinedMetricSpecification struct {
	PredefinedMetricType MetricTypeEnum `json:"PredefinedMetricType"`
	ResourceLabel        *string        `json:"ResourceLabel,omitempty"`
}
