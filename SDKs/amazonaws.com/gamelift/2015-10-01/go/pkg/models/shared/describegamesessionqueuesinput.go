package shared

type DescribeGameSessionQueuesInput struct {
	Limit     *int64   `json:"Limit"`
	Names     []string `json:"Names"`
	NextToken *string  `json:"NextToken"`
}
