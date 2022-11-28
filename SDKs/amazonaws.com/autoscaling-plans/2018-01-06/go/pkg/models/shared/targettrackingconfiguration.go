package shared

// TargetTrackingConfiguration
// Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
type TargetTrackingConfiguration struct {
	CustomizedScalingMetricSpecification *CustomizedScalingMetricSpecification `json:"CustomizedScalingMetricSpecification,omitempty"`
	DisableScaleIn                       *bool                                 `json:"DisableScaleIn,omitempty"`
	EstimatedInstanceWarmup              *int64                                `json:"EstimatedInstanceWarmup,omitempty"`
	PredefinedScalingMetricSpecification *PredefinedScalingMetricSpecification `json:"PredefinedScalingMetricSpecification,omitempty"`
	ScaleInCooldown                      *int64                                `json:"ScaleInCooldown,omitempty"`
	ScaleOutCooldown                     *int64                                `json:"ScaleOutCooldown,omitempty"`
	TargetValue                          float64                               `json:"TargetValue"`
}
