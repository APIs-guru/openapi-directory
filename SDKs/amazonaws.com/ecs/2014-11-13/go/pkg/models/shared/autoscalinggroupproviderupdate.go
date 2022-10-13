package shared

type AutoScalingGroupProviderUpdate struct {
	ManagedScaling               *ManagedScaling                   `json:"managedScaling"`
	ManagedTerminationProtection *ManagedTerminationProtectionEnum `json:"managedTerminationProtection"`
}
