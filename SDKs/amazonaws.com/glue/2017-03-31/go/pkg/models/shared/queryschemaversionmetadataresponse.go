package shared

type QuerySchemaVersionMetadataResponse struct {
	MetadataInfoMap map[string]MetadataInfo `json:"MetadataInfoMap"`
	NextToken       *string                 `json:"NextToken"`
	SchemaVersionID *string                 `json:"SchemaVersionId"`
}
