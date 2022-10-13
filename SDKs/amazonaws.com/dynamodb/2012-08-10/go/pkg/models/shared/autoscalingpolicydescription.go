package shared

type AutoScalingPolicyDescription struct {
	PolicyName                               *string                                                         `json:"PolicyName"`
	TargetTrackingScalingPolicyConfiguration *AutoScalingTargetTrackingScalingPolicyConfigurationDescription `json:"TargetTrackingScalingPolicyConfiguration"`
}
