package shared



type TargetTrackingConfiguration struct {
    CustomizedScalingMetricSpecification *CustomizedScalingMetricSpecification `json:"CustomizedScalingMetricSpecification,omitempty"`
    DisableScaleIn *bool `json:"DisableScaleIn,omitempty"`
    EstimatedInstanceWarmup *int64 `json:"EstimatedInstanceWarmup,omitempty"`
    PredefinedScalingMetricSpecification *PredefinedScalingMetricSpecification `json:"PredefinedScalingMetricSpecification,omitempty"`
    ScaleInCooldown *int64 `json:"ScaleInCooldown,omitempty"`
    ScaleOutCooldown *int64 `json:"ScaleOutCooldown,omitempty"`
    TargetValue float64 `json:"TargetValue"`
    
}

