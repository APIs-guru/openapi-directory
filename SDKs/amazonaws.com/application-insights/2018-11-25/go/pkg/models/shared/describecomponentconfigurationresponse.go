package shared

type DescribeComponentConfigurationResponse struct {
	ComponentConfiguration *string   `json:"ComponentConfiguration,omitempty"`
	Monitor                *bool     `json:"Monitor,omitempty"`
	Tier                   *TierEnum `json:"Tier,omitempty"`
}
