package shared

type AutoScalingPolicyDescription struct {
	PolicyName                               *string                                                         `json:"PolicyName,omitempty"`
	TargetTrackingScalingPolicyConfiguration *AutoScalingTargetTrackingScalingPolicyConfigurationDescription `json:"TargetTrackingScalingPolicyConfiguration,omitempty"`
}
