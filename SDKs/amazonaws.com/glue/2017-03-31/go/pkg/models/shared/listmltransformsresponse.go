package shared

type ListMlTransformsResponse struct {
	NextToken    *string  `json:"NextToken"`
	TransformIds []string `json:"TransformIds"`
}
