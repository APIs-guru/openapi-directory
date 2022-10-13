package shared

type ListJobRunsResponse struct {
	JobRuns   []JobRun `json:"jobRuns"`
	NextToken *string  `json:"nextToken"`
}
