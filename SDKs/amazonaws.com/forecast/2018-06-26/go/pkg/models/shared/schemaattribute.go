package shared

// SchemaAttribute
// An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
type SchemaAttribute struct {
	AttributeName *string            `json:"AttributeName,omitempty"`
	AttributeType *AttributeTypeEnum `json:"AttributeType,omitempty"`
}
