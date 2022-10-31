package shared

type GetMlTaskRunsRequest struct {
	Filter      *TaskRunFilterCriteria `json:"Filter,omitempty"`
	MaxResults  *int64                 `json:"MaxResults,omitempty"`
	NextToken   *string                `json:"NextToken,omitempty"`
	Sort        *TaskRunSortCriteria   `json:"Sort,omitempty"`
	TransformID string                 `json:"TransformId"`
}
