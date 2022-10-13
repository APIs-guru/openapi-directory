package shared

type ListJobsResult struct {
	Jobs      []Job   `json:"jobs"`
	NextToken *string `json:"nextToken"`
}
