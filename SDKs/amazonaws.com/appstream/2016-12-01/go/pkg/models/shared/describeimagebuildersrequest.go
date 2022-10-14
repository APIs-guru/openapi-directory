package shared

type DescribeImageBuildersRequest struct {
	MaxResults *int64   `json:"MaxResults,omitempty"`
	Names      []string `json:"Names,omitempty"`
	NextToken  *string  `json:"NextToken,omitempty"`
}
