package shared

type DescribeImageBuildersResult struct {
	ImageBuilders []ImageBuilder `json:"ImageBuilders,omitempty"`
	NextToken     *string        `json:"NextToken,omitempty"`
}
