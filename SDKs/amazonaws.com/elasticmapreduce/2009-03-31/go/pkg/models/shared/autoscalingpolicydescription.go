package shared



type AutoScalingPolicyDescription struct {
    Constraints *ScalingConstraints `json:"Constraints,omitempty"`
    Rules []ScalingRule `json:"Rules,omitempty"`
    Status *AutoScalingPolicyStatus `json:"Status,omitempty"`
    
}

