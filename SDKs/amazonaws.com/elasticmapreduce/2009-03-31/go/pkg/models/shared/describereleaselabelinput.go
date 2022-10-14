package shared

type DescribeReleaseLabelInput struct {
	MaxResults   *int64  `json:"MaxResults,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
	ReleaseLabel *string `json:"ReleaseLabel,omitempty"`
}
