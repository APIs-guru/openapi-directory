package shared

type DescribeImagesResult struct {
	Images    []Image `json:"Images"`
	NextToken *string `json:"NextToken"`
}
