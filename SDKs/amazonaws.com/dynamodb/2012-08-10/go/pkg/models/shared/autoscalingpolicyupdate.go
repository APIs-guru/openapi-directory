package shared

type AutoScalingPolicyUpdate struct {
	PolicyName                               *string                                                   `json:"PolicyName"`
	TargetTrackingScalingPolicyConfiguration AutoScalingTargetTrackingScalingPolicyConfigurationUpdate `json:"TargetTrackingScalingPolicyConfiguration"`
}
