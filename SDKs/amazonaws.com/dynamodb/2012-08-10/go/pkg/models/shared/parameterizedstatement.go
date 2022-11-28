package shared

// ParameterizedStatement
//
//	Represents a PartiQL statment that uses parameters.
type ParameterizedStatement struct {
	Parameters []AttributeValue `json:"Parameters,omitempty"`
	Statement  string           `json:"Statement"`
}
