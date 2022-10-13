package shared

type ListBuildsForProjectOutput struct {
	Ids       []string `json:"ids"`
	NextToken *string  `json:"nextToken"`
}
