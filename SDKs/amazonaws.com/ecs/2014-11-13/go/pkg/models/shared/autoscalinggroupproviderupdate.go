package shared

// AutoScalingGroupProviderUpdate
// The details of the Auto Scaling group capacity provider to update.
type AutoScalingGroupProviderUpdate struct {
	ManagedScaling               *ManagedScaling                   `json:"managedScaling,omitempty"`
	ManagedTerminationProtection *ManagedTerminationProtectionEnum `json:"managedTerminationProtection,omitempty"`
}
