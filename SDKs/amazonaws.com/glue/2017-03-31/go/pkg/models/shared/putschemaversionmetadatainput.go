package shared



type PutSchemaVersionMetadataInput struct {
    MetadataKeyValue MetadataKeyValuePair `json:"MetadataKeyValue"`
    SchemaID *SchemaID `json:"SchemaId,omitempty"`
    SchemaVersionID *string `json:"SchemaVersionId,omitempty"`
    SchemaVersionNumber *SchemaVersionNumber `json:"SchemaVersionNumber,omitempty"`
    
}

