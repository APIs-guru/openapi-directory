package shared

// AutoScalingPolicyDescription
// Represents the properties of the scaling policy.
type AutoScalingPolicyDescription struct {
	PolicyName                               *string                                                         `json:"PolicyName,omitempty"`
	TargetTrackingScalingPolicyConfiguration *AutoScalingTargetTrackingScalingPolicyConfigurationDescription `json:"TargetTrackingScalingPolicyConfiguration,omitempty"`
}
