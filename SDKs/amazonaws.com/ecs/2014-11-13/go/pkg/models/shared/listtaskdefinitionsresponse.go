package shared

type ListTaskDefinitionsResponse struct {
	NextToken          *string  `json:"nextToken"`
	TaskDefinitionArns []string `json:"taskDefinitionArns"`
}
