package shared

type ListProjectsResult struct {
	NextToken *string   `json:"nextToken"`
	Projects  []Project `json:"projects"`
}
