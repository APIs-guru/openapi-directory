package shared

type GetJobRunsRequest struct {
	JobName    string  `json:"JobName"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
