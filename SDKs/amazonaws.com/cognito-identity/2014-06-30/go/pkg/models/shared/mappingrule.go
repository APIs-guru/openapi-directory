package shared

type MappingRule struct {
	Claim     string                   `json:"Claim"`
	MatchType MappingRuleMatchTypeEnum `json:"MatchType"`
	RoleArn   string                   `json:"RoleARN"`
	Value     string                   `json:"Value"`
}
