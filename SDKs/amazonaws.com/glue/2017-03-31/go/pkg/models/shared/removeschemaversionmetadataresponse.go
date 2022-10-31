package shared



type RemoveSchemaVersionMetadataResponse struct {
    LatestVersion *bool `json:"LatestVersion,omitempty"`
    MetadataKey *string `json:"MetadataKey,omitempty"`
    MetadataValue *string `json:"MetadataValue,omitempty"`
    RegistryName *string `json:"RegistryName,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    SchemaName *string `json:"SchemaName,omitempty"`
    SchemaVersionID *string `json:"SchemaVersionId,omitempty"`
    VersionNumber *int64 `json:"VersionNumber,omitempty"`
    
}

