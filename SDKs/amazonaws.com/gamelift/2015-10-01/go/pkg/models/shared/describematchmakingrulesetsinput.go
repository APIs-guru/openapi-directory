package shared

// DescribeMatchmakingRuleSetsInput
// Represents the input for a request operation.
type DescribeMatchmakingRuleSetsInput struct {
	Limit     *int64   `json:"Limit,omitempty"`
	Names     []string `json:"Names,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
