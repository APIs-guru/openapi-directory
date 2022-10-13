package shared

type ListProjectsResponse struct {
	NextToken        *string          `json:"nextToken"`
	ProjectSummaries []ProjectSummary `json:"projectSummaries"`
}
