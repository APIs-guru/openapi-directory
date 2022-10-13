package shared

type GetJobRunsRequest struct {
	JobName    string  `json:"JobName"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
