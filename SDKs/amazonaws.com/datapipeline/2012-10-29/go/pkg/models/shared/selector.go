package shared

// Selector
// A comparision that is used to determine whether a query should return this object.
type Selector struct {
	FieldName *string   `json:"fieldName,omitempty"`
	Operator  *Operator `json:"operator,omitempty"`
}
