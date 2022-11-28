package shared

// ScalingAction
// The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
type ScalingAction struct {
	Market                           *MarketTypeEnum                  `json:"Market,omitempty"`
	SimpleScalingPolicyConfiguration SimpleScalingPolicyConfiguration `json:"SimpleScalingPolicyConfiguration"`
}
