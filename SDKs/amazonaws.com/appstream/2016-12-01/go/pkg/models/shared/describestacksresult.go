package shared

type DescribeStacksResult struct {
	NextToken *string `json:"NextToken"`
	Stacks    []Stack `json:"Stacks"`
}
