package shared

type ListSharedProjectsOutput struct {
	NextToken *string  `json:"nextToken"`
	Projects  []string `json:"projects"`
}
