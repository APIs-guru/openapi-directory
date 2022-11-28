package shared

// Attribute
// Represents a named directory attribute.
type Attribute struct {
	Name  *string `json:"Name,omitempty"`
	Value *string `json:"Value,omitempty"`
}
