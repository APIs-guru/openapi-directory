package shared

// PredefinedScalingMetricSpecification
// Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
type PredefinedScalingMetricSpecification struct {
	PredefinedScalingMetricType ScalingMetricTypeEnum `json:"PredefinedScalingMetricType"`
	ResourceLabel               *string               `json:"ResourceLabel,omitempty"`
}
