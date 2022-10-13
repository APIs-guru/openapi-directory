package shared

type DescribeImageBuildersResult struct {
	ImageBuilders []ImageBuilder `json:"ImageBuilders"`
	NextToken     *string        `json:"NextToken"`
}
