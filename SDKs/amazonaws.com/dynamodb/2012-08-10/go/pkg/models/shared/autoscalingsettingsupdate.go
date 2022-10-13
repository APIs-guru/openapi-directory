package shared

type AutoScalingSettingsUpdate struct {
	AutoScalingDisabled *bool                    `json:"AutoScalingDisabled"`
	AutoScalingRoleArn  *string                  `json:"AutoScalingRoleArn"`
	MaximumUnits        *int64                   `json:"MaximumUnits"`
	MinimumUnits        *int64                   `json:"MinimumUnits"`
	ScalingPolicyUpdate *AutoScalingPolicyUpdate `json:"ScalingPolicyUpdate"`
}
