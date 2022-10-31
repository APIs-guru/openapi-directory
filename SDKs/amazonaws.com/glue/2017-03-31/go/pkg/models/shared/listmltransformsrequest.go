package shared

type ListMlTransformsRequest struct {
	Filter     *TransformFilterCriteria `json:"Filter,omitempty"`
	MaxResults *int64                   `json:"MaxResults,omitempty"`
	NextToken  *string                  `json:"NextToken,omitempty"`
	Sort       *TransformSortCriteria   `json:"Sort,omitempty"`
	Tags       map[string]string        `json:"Tags,omitempty"`
}
