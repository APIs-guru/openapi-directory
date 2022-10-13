package shared

type TargetTrackingConfiguration struct {
	CustomizedScalingMetricSpecification *CustomizedScalingMetricSpecification `json:"CustomizedScalingMetricSpecification"`
	DisableScaleIn                       *bool                                 `json:"DisableScaleIn"`
	EstimatedInstanceWarmup              *int64                                `json:"EstimatedInstanceWarmup"`
	PredefinedScalingMetricSpecification *PredefinedScalingMetricSpecification `json:"PredefinedScalingMetricSpecification"`
	ScaleInCooldown                      *int64                                `json:"ScaleInCooldown"`
	ScaleOutCooldown                     *int64                                `json:"ScaleOutCooldown"`
	TargetValue                          float64                               `json:"TargetValue"`
}
