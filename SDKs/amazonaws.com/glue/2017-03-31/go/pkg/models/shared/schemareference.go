package shared

type SchemaReference struct {
	SchemaID            *SchemaID `json:"SchemaId"`
	SchemaVersionID     *string   `json:"SchemaVersionId"`
	SchemaVersionNumber *int64    `json:"SchemaVersionNumber"`
}
