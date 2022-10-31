package shared



type AutoScalingTargetTrackingScalingPolicyConfigurationDescription struct {
    DisableScaleIn *bool `json:"DisableScaleIn,omitempty"`
    ScaleInCooldown *int64 `json:"ScaleInCooldown,omitempty"`
    ScaleOutCooldown *int64 `json:"ScaleOutCooldown,omitempty"`
    TargetValue float64 `json:"TargetValue"`
    
}

