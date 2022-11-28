package shared

// AutoScalingSettingsDescription
// Represents the auto scaling settings for a global table or global secondary index.
type AutoScalingSettingsDescription struct {
	AutoScalingDisabled *bool                          `json:"AutoScalingDisabled,omitempty"`
	AutoScalingRoleArn  *string                        `json:"AutoScalingRoleArn,omitempty"`
	MaximumUnits        *int64                         `json:"MaximumUnits,omitempty"`
	MinimumUnits        *int64                         `json:"MinimumUnits,omitempty"`
	ScalingPolicies     []AutoScalingPolicyDescription `json:"ScalingPolicies,omitempty"`
}
