package shared



type ScalingAction struct {
    Market *MarketTypeEnum `json:"Market,omitempty"`
    SimpleScalingPolicyConfiguration SimpleScalingPolicyConfiguration `json:"SimpleScalingPolicyConfiguration"`
    
}

