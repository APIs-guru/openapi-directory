package shared

type DescribeMatchmakingRuleSetsInput struct {
	Limit     *int64   `json:"Limit"`
	Names     []string `json:"Names"`
	NextToken *string  `json:"NextToken"`
}
