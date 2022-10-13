package shared

type AutoScalingPolicyStateChangeReason struct {
	Code    *AutoScalingPolicyStateChangeReasonCodeEnum `json:"Code"`
	Message *string                                     `json:"Message"`
}
