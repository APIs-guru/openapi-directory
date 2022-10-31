package shared

type ListExportsInput struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	TableArn   *string `json:"TableArn,omitempty"`
}
