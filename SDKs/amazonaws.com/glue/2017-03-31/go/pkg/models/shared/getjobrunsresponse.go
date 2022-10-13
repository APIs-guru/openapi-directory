package shared

type GetJobRunsResponse struct {
	JobRuns   []JobRun `json:"JobRuns"`
	NextToken *string  `json:"NextToken"`
}
