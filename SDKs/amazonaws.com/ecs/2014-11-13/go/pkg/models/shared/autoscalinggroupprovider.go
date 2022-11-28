package shared

// AutoScalingGroupProvider
// The details of the Auto Scaling group for the capacity provider.
type AutoScalingGroupProvider struct {
	AutoScalingGroupArn          string                            `json:"autoScalingGroupArn"`
	ManagedScaling               *ManagedScaling                   `json:"managedScaling,omitempty"`
	ManagedTerminationProtection *ManagedTerminationProtectionEnum `json:"managedTerminationProtection,omitempty"`
}
