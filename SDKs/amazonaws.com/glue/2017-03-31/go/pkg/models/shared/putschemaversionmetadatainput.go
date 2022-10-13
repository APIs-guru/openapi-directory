package shared

type PutSchemaVersionMetadataInput struct {
	MetadataKeyValue    MetadataKeyValuePair `json:"MetadataKeyValue"`
	SchemaID            *SchemaID            `json:"SchemaId"`
	SchemaVersionID     *string              `json:"SchemaVersionId"`
	SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber"`
}
