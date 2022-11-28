package shared

// ObjectTypeField
// Represents a field in a ProfileObjectType.
type ObjectTypeField struct {
	ContentType *FieldContentTypeEnum `json:"ContentType,omitempty"`
	Source      *string               `json:"Source,omitempty"`
	Target      *string               `json:"Target,omitempty"`
}
