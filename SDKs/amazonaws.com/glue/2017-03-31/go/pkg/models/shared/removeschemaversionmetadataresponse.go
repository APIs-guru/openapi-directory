package shared

type RemoveSchemaVersionMetadataResponse struct {
	LatestVersion   *bool   `json:"LatestVersion"`
	MetadataKey     *string `json:"MetadataKey"`
	MetadataValue   *string `json:"MetadataValue"`
	RegistryName    *string `json:"RegistryName"`
	SchemaArn       *string `json:"SchemaArn"`
	SchemaName      *string `json:"SchemaName"`
	SchemaVersionID *string `json:"SchemaVersionId"`
	VersionNumber   *int64  `json:"VersionNumber"`
}
