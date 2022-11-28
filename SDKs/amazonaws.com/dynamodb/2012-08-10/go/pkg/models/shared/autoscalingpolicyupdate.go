package shared

// AutoScalingPolicyUpdate
// Represents the auto scaling policy to be modified.
type AutoScalingPolicyUpdate struct {
	PolicyName                               *string                                                   `json:"PolicyName,omitempty"`
	TargetTrackingScalingPolicyConfiguration AutoScalingTargetTrackingScalingPolicyConfigurationUpdate `json:"TargetTrackingScalingPolicyConfiguration"`
}
