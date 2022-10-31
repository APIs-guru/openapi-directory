package shared



type AutoScalingGroupProvider struct {
    AutoScalingGroupArn string `json:"autoScalingGroupArn"`
    ManagedScaling *ManagedScaling `json:"managedScaling,omitempty"`
    ManagedTerminationProtection *ManagedTerminationProtectionEnum `json:"managedTerminationProtection,omitempty"`
    
}

