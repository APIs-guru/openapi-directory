package shared

type Field struct {
	Name *string        `json:"name"`
	Type *FieldTypeEnum `json:"type"`
}
