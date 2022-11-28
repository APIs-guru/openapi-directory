package shared

// AutoScalingPolicyDescription
// An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
type AutoScalingPolicyDescription struct {
	Constraints *ScalingConstraints      `json:"Constraints,omitempty"`
	Rules       []ScalingRule            `json:"Rules,omitempty"`
	Status      *AutoScalingPolicyStatus `json:"Status,omitempty"`
}
