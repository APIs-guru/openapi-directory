package shared

// SchemaReference
// An object that references a schema stored in the Glue Schema Registry.
type SchemaReference struct {
	SchemaID            *SchemaID `json:"SchemaId,omitempty"`
	SchemaVersionID     *string   `json:"SchemaVersionId,omitempty"`
	SchemaVersionNumber *int64    `json:"SchemaVersionNumber,omitempty"`
}
