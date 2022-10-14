package shared

type ListProjectsResponse struct {
	NextToken *string          `json:"nextToken,omitempty"`
	Projects  []ProjectSummary `json:"projects"`
}
