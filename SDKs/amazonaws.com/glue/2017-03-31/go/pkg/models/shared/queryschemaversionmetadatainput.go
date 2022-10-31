package shared



type QuerySchemaVersionMetadataInput struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MetadataList []MetadataKeyValuePair `json:"MetadataList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SchemaID *SchemaID `json:"SchemaId,omitempty"`
    SchemaVersionID *string `json:"SchemaVersionId,omitempty"`
    SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber,omitempty"`
    
}

