package shared

type ListProjectsOutput struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Projects  []string `json:"projects,omitempty"`
}
