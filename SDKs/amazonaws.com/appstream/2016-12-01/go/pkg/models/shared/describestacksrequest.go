package shared

type DescribeStacksRequest struct {
	Names     []string `json:"Names,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
