package shared



type CreateSchemaResponse struct {
    Compatibility *CompatibilityEnum `json:"Compatibility,omitempty"`
    DataFormat *DataFormatEnum `json:"DataFormat,omitempty"`
    Description *string `json:"Description,omitempty"`
    LatestSchemaVersion *int64 `json:"LatestSchemaVersion,omitempty"`
    NextSchemaVersion *int64 `json:"NextSchemaVersion,omitempty"`
    RegistryArn *string `json:"RegistryArn,omitempty"`
    RegistryName *string `json:"RegistryName,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    SchemaCheckpoint *int64 `json:"SchemaCheckpoint,omitempty"`
    SchemaName *string `json:"SchemaName,omitempty"`
    SchemaStatus *SchemaStatusEnum `json:"SchemaStatus,omitempty"`
    SchemaVersionID *string `json:"SchemaVersionId,omitempty"`
    SchemaVersionStatus *SchemaVersionStatusEnum `json:"SchemaVersionStatus,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

