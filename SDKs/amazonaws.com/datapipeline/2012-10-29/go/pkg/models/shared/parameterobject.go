package shared

// ParameterObject
// Contains information about a parameter object.
type ParameterObject struct {
	Attributes []ParameterAttribute `json:"attributes"`
	ID         string               `json:"id"`
}
