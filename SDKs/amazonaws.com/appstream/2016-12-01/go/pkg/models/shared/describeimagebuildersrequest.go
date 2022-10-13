package shared

type DescribeImageBuildersRequest struct {
	MaxResults *int64   `json:"MaxResults"`
	Names      []string `json:"Names"`
	NextToken  *string  `json:"NextToken"`
}
