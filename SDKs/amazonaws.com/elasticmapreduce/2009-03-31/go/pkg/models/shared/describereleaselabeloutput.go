package shared

type DescribeReleaseLabelOutput struct {
	Applications []SimplifiedApplication `json:"Applications"`
	NextToken    *string                 `json:"NextToken"`
	ReleaseLabel *string                 `json:"ReleaseLabel"`
}
