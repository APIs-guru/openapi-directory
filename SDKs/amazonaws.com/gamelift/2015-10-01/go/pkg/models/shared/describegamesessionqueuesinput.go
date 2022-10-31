package shared

type DescribeGameSessionQueuesInput struct {
	Limit     *int64   `json:"Limit,omitempty"`
	Names     []string `json:"Names,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
