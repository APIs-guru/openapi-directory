package shared

type CreateSchemaResponse struct {
	Compatibility       *CompatibilityEnum       `json:"Compatibility"`
	DataFormat          *DataFormatEnum          `json:"DataFormat"`
	Description         *string                  `json:"Description"`
	LatestSchemaVersion *int64                   `json:"LatestSchemaVersion"`
	NextSchemaVersion   *int64                   `json:"NextSchemaVersion"`
	RegistryArn         *string                  `json:"RegistryArn"`
	RegistryName        *string                  `json:"RegistryName"`
	SchemaArn           *string                  `json:"SchemaArn"`
	SchemaCheckpoint    *int64                   `json:"SchemaCheckpoint"`
	SchemaName          *string                  `json:"SchemaName"`
	SchemaStatus        *SchemaStatusEnum        `json:"SchemaStatus"`
	SchemaVersionID     *string                  `json:"SchemaVersionId"`
	SchemaVersionStatus *SchemaVersionStatusEnum `json:"SchemaVersionStatus"`
	Tags                map[string]string        `json:"Tags"`
}
