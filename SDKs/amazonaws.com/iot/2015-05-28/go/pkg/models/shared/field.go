package shared

// Field
// Describes the name and data type at a field.
type Field struct {
	Name *string        `json:"name,omitempty"`
	Type *FieldTypeEnum `json:"type,omitempty"`
}
