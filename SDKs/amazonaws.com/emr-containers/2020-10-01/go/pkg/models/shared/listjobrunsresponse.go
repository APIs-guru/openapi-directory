package shared

type ListJobRunsResponse struct {
	JobRuns   []JobRun `json:"jobRuns,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
