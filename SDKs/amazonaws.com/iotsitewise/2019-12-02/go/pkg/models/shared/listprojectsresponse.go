package shared

type ListProjectsResponse struct {
	NextToken        *string          `json:"nextToken,omitempty"`
	ProjectSummaries []ProjectSummary `json:"projectSummaries"`
}
