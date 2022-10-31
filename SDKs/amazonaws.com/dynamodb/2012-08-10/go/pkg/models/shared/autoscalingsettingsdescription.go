package shared

type AutoScalingSettingsDescription struct {
	AutoScalingDisabled *bool                          `json:"AutoScalingDisabled,omitempty"`
	AutoScalingRoleArn  *string                        `json:"AutoScalingRoleArn,omitempty"`
	MaximumUnits        *int64                         `json:"MaximumUnits,omitempty"`
	MinimumUnits        *int64                         `json:"MinimumUnits,omitempty"`
	ScalingPolicies     []AutoScalingPolicyDescription `json:"ScalingPolicies,omitempty"`
}
