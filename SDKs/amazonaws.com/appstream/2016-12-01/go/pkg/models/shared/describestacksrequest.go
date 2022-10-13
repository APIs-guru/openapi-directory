package shared

type DescribeStacksRequest struct {
	Names     []string `json:"Names"`
	NextToken *string  `json:"NextToken"`
}
