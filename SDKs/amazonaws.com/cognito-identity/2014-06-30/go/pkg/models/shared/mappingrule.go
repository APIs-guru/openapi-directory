package shared

// MappingRule
// A rule that maps a claim name, a claim value, and a match type to a role ARN.
type MappingRule struct {
	Claim     string                   `json:"Claim"`
	MatchType MappingRuleMatchTypeEnum `json:"MatchType"`
	RoleArn   string                   `json:"RoleARN"`
	Value     string                   `json:"Value"`
}
