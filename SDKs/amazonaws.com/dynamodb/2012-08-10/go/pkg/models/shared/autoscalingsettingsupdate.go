package shared



type AutoScalingSettingsUpdate struct {
    AutoScalingDisabled *bool `json:"AutoScalingDisabled,omitempty"`
    AutoScalingRoleArn *string `json:"AutoScalingRoleArn,omitempty"`
    MaximumUnits *int64 `json:"MaximumUnits,omitempty"`
    MinimumUnits *int64 `json:"MinimumUnits,omitempty"`
    ScalingPolicyUpdate *AutoScalingPolicyUpdate `json:"ScalingPolicyUpdate,omitempty"`
    
}

