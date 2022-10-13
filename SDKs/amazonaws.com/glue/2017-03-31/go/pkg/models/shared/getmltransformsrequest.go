package shared

type GetMlTransformsRequest struct {
	Filter     *TransformFilterCriteria `json:"Filter"`
	MaxResults *int64                   `json:"MaxResults"`
	NextToken  *string                  `json:"NextToken"`
	Sort       *TransformSortCriteria   `json:"Sort"`
}
