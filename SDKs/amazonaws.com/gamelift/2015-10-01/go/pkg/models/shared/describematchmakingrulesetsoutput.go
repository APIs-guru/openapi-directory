package shared

type DescribeMatchmakingRuleSetsOutput struct {
	NextToken *string              `json:"NextToken,omitempty"`
	RuleSets  []MatchmakingRuleSet `json:"RuleSets"`
}
