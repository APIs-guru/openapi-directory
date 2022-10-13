package shared

type ScalingAction struct {
	Market                           *MarketTypeEnum                  `json:"Market"`
	SimpleScalingPolicyConfiguration SimpleScalingPolicyConfiguration `json:"SimpleScalingPolicyConfiguration"`
}
