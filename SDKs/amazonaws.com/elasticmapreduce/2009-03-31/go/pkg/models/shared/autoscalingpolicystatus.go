package shared

// AutoScalingPolicyStatus
// The status of an automatic scaling policy.
type AutoScalingPolicyStatus struct {
	State             *AutoScalingPolicyStateEnum         `json:"State,omitempty"`
	StateChangeReason *AutoScalingPolicyStateChangeReason `json:"StateChangeReason,omitempty"`
}
