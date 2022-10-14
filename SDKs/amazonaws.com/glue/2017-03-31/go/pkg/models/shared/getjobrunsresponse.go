package shared

type GetJobRunsResponse struct {
	JobRuns   []JobRun `json:"JobRuns,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
