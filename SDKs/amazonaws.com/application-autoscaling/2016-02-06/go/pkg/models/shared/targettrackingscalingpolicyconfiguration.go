package shared



type TargetTrackingScalingPolicyConfiguration struct {
    CustomizedMetricSpecification *CustomizedMetricSpecification `json:"CustomizedMetricSpecification,omitempty"`
    DisableScaleIn *bool `json:"DisableScaleIn,omitempty"`
    PredefinedMetricSpecification *PredefinedMetricSpecification `json:"PredefinedMetricSpecification,omitempty"`
    ScaleInCooldown *int64 `json:"ScaleInCooldown,omitempty"`
    ScaleOutCooldown *int64 `json:"ScaleOutCooldown,omitempty"`
    TargetValue float64 `json:"TargetValue"`
    
}

