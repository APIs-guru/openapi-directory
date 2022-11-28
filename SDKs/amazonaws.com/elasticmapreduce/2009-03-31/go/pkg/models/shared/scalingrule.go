package shared

// ScalingRule
// A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
type ScalingRule struct {
	Action      ScalingAction  `json:"Action"`
	Description *string        `json:"Description,omitempty"`
	Name        string         `json:"Name"`
	Trigger     ScalingTrigger `json:"Trigger"`
}
