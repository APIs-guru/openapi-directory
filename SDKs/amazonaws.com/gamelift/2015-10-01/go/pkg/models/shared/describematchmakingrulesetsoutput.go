package shared

type DescribeMatchmakingRuleSetsOutput struct {
	NextToken *string              `json:"NextToken"`
	RuleSets  []MatchmakingRuleSet `json:"RuleSets"`
}
