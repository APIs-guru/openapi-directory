package shared

type GetSchemaVersionInput struct {
	SchemaID            *SchemaID            `json:"SchemaId"`
	SchemaVersionID     *string              `json:"SchemaVersionId"`
	SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber"`
}
