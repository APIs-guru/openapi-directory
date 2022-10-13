package shared

type TargetTrackingScalingPolicyConfiguration struct {
	CustomizedMetricSpecification *CustomizedMetricSpecification `json:"CustomizedMetricSpecification"`
	DisableScaleIn                *bool                          `json:"DisableScaleIn"`
	PredefinedMetricSpecification *PredefinedMetricSpecification `json:"PredefinedMetricSpecification"`
	ScaleInCooldown               *int64                         `json:"ScaleInCooldown"`
	ScaleOutCooldown              *int64                         `json:"ScaleOutCooldown"`
	TargetValue                   float64                        `json:"TargetValue"`
}
