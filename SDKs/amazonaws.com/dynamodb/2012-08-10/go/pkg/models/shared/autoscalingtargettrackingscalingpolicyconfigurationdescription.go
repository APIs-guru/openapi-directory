package shared

type AutoScalingTargetTrackingScalingPolicyConfigurationDescription struct {
	DisableScaleIn   *bool   `json:"DisableScaleIn"`
	ScaleInCooldown  *int64  `json:"ScaleInCooldown"`
	ScaleOutCooldown *int64  `json:"ScaleOutCooldown"`
	TargetValue      float64 `json:"TargetValue"`
}
