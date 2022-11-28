package shared

// ListProjectsResult
// Represents the result of a list projects request.
type ListProjectsResult struct {
	NextToken *string   `json:"nextToken,omitempty"`
	Projects  []Project `json:"projects,omitempty"`
}
