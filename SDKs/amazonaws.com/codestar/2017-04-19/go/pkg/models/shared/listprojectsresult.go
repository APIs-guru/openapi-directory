package shared

type ListProjectsResult struct {
	NextToken *string          `json:"nextToken,omitempty"`
	Projects  []ProjectSummary `json:"projects"`
}
