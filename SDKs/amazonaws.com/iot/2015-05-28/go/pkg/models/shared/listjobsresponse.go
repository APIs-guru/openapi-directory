package shared

type ListJobsResponse struct {
	Jobs      []JobSummary `json:"jobs"`
	NextToken *string      `json:"nextToken"`
}
