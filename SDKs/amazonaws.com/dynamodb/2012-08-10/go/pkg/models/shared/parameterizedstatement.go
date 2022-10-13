package shared

type ParameterizedStatement struct {
	Parameters []AttributeValue `json:"Parameters"`
	Statement  string           `json:"Statement"`
}
