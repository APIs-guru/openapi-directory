package shared

type ListProjectsOutput struct {
	NextToken *string  `json:"nextToken"`
	Projects  []string `json:"projects"`
}
