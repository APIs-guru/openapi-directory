package shared

// AttributeType
// Specifies whether the attribute is standard or custom.
type AttributeType struct {
	Name  string  `json:"Name"`
	Value *string `json:"Value,omitempty"`
}
