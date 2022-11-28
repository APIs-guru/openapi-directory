package shared

// ListJobsResult
// Represents the result of a list jobs request.
type ListJobsResult struct {
	Jobs      []Job   `json:"jobs,omitempty"`
	NextToken *string `json:"nextToken,omitempty"`
}
