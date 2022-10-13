package shared

type ListApplicationsOutput struct {
	Applications []string `json:"applications"`
	NextToken    *string  `json:"nextToken"`
}
