package shared

type QuerySchemaVersionMetadataResponse struct {
	MetadataInfoMap map[string]MetadataInfo `json:"MetadataInfoMap,omitempty"`
	NextToken       *string                 `json:"NextToken,omitempty"`
	SchemaVersionID *string                 `json:"SchemaVersionId,omitempty"`
}
