package shared

type ListBuildsOutput struct {
	Ids       []string `json:"ids"`
	NextToken *string  `json:"nextToken"`
}
