package shared

type GetMlTaskRunsRequest struct {
	Filter      *TaskRunFilterCriteria `json:"Filter"`
	MaxResults  *int64                 `json:"MaxResults"`
	NextToken   *string                `json:"NextToken"`
	Sort        *TaskRunSortCriteria   `json:"Sort"`
	TransformID string                 `json:"TransformId"`
}
