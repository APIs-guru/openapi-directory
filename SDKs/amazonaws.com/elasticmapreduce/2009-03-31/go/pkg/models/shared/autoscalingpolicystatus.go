package shared

type AutoScalingPolicyStatus struct {
	State             *AutoScalingPolicyStateEnum         `json:"State"`
	StateChangeReason *AutoScalingPolicyStateChangeReason `json:"StateChangeReason"`
}
