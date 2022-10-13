package shared

type PredefinedScalingMetricSpecification struct {
	PredefinedScalingMetricType ScalingMetricTypeEnum `json:"PredefinedScalingMetricType"`
	ResourceLabel               *string               `json:"ResourceLabel"`
}
