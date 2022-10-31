package shared

type DescribeComponentConfigurationRecommendationRequest struct {
	ComponentName     string   `json:"ComponentName"`
	ResourceGroupName string   `json:"ResourceGroupName"`
	Tier              TierEnum `json:"Tier"`
}
