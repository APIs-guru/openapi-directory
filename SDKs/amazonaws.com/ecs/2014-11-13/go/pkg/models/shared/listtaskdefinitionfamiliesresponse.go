package shared

type ListTaskDefinitionFamiliesResponse struct {
	Families  []string `json:"families"`
	NextToken *string  `json:"nextToken"`
}
