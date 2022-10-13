package shared

type DescribeComponentConfigurationResponse struct {
	ComponentConfiguration *string   `json:"ComponentConfiguration"`
	Monitor                *bool     `json:"Monitor"`
	Tier                   *TierEnum `json:"Tier"`
}
