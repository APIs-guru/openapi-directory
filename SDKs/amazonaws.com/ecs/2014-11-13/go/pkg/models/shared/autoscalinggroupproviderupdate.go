package shared



type AutoScalingGroupProviderUpdate struct {
    ManagedScaling *ManagedScaling `json:"managedScaling,omitempty"`
    ManagedTerminationProtection *ManagedTerminationProtectionEnum `json:"managedTerminationProtection,omitempty"`
    
}

