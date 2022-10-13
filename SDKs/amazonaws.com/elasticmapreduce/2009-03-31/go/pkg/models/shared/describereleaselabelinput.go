package shared

type DescribeReleaseLabelInput struct {
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
	ReleaseLabel *string `json:"ReleaseLabel"`
}
