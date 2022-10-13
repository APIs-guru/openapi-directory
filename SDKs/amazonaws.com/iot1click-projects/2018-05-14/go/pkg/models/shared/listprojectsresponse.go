package shared

type ListProjectsResponse struct {
	NextToken *string          `json:"nextToken"`
	Projects  []ProjectSummary `json:"projects"`
}
