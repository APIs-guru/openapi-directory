package shared

// AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
// Represents the settings of a target tracking scaling policy that will be modified.
type AutoScalingTargetTrackingScalingPolicyConfigurationUpdate struct {
	DisableScaleIn   *bool   `json:"DisableScaleIn,omitempty"`
	ScaleInCooldown  *int64  `json:"ScaleInCooldown,omitempty"`
	ScaleOutCooldown *int64  `json:"ScaleOutCooldown,omitempty"`
	TargetValue      float64 `json:"TargetValue"`
}
