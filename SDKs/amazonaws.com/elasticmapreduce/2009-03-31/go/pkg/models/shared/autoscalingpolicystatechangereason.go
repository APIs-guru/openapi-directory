package shared

// AutoScalingPolicyStateChangeReason
// The reason for an <a>AutoScalingPolicyStatus</a> change.
type AutoScalingPolicyStateChangeReason struct {
	Code    *AutoScalingPolicyStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                                     `json:"Message,omitempty"`
}
