package shared



type AutoScalingPolicyStatus struct {
    State *AutoScalingPolicyStateEnum `json:"State,omitempty"`
    StateChangeReason *AutoScalingPolicyStateChangeReason `json:"StateChangeReason,omitempty"`
    
}

