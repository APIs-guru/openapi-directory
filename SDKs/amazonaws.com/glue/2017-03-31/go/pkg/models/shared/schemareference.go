package shared

type SchemaReference struct {
	SchemaID            *SchemaID `json:"SchemaId,omitempty"`
	SchemaVersionID     *string   `json:"SchemaVersionId,omitempty"`
	SchemaVersionNumber *int64    `json:"SchemaVersionNumber,omitempty"`
}
