package shared

type QuerySchemaVersionMetadataInput struct {
	MaxResults          *int64                 `json:"MaxResults"`
	MetadataList        []MetadataKeyValuePair `json:"MetadataList"`
	NextToken           *string                `json:"NextToken"`
	SchemaID            *SchemaID              `json:"SchemaId"`
	SchemaVersionID     *string                `json:"SchemaVersionId"`
	SchemaVersionNumber *SchemaVersionNumber   `json:"SchemaVersionNumber"`
}
