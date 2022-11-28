package shared

// DescribeMatchmakingRuleSetsOutput
// Represents the returned data in response to a request operation.
type DescribeMatchmakingRuleSetsOutput struct {
	NextToken *string              `json:"NextToken,omitempty"`
	RuleSets  []MatchmakingRuleSet `json:"RuleSets"`
}
