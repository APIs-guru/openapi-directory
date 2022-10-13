package shared

type AutoScalingGroupProvider struct {
	AutoScalingGroupArn          string                            `json:"autoScalingGroupArn"`
	ManagedScaling               *ManagedScaling                   `json:"managedScaling"`
	ManagedTerminationProtection *ManagedTerminationProtectionEnum `json:"managedTerminationProtection"`
}
