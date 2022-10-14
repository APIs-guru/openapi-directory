package shared

type DescribeMatchmakingRuleSetsInput struct {
	Limit     *int64   `json:"Limit,omitempty"`
	Names     []string `json:"Names,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
