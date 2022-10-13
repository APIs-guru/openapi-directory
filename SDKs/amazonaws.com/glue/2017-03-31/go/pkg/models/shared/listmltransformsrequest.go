package shared

type ListMlTransformsRequest struct {
	Filter     *TransformFilterCriteria `json:"Filter"`
	MaxResults *int64                   `json:"MaxResults"`
	NextToken  *string                  `json:"NextToken"`
	Sort       *TransformSortCriteria   `json:"Sort"`
	Tags       map[string]string        `json:"Tags"`
}
