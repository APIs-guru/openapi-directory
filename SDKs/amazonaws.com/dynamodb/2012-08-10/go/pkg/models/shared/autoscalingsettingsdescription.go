package shared

type AutoScalingSettingsDescription struct {
	AutoScalingDisabled *bool                          `json:"AutoScalingDisabled"`
	AutoScalingRoleArn  *string                        `json:"AutoScalingRoleArn"`
	MaximumUnits        *int64                         `json:"MaximumUnits"`
	MinimumUnits        *int64                         `json:"MinimumUnits"`
	ScalingPolicies     []AutoScalingPolicyDescription `json:"ScalingPolicies"`
}
