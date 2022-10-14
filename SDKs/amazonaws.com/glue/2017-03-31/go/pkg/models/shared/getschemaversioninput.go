package shared

type GetSchemaVersionInput struct {
	SchemaID            *SchemaID            `json:"SchemaId,omitempty"`
	SchemaVersionID     *string              `json:"SchemaVersionId,omitempty"`
	SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber,omitempty"`
}
