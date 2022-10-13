package shared

type GetSchemaResponse struct {
	Compatibility       *CompatibilityEnum `json:"Compatibility"`
	CreatedTime         *string            `json:"CreatedTime"`
	DataFormat          *DataFormatEnum    `json:"DataFormat"`
	Description         *string            `json:"Description"`
	LatestSchemaVersion *int64             `json:"LatestSchemaVersion"`
	NextSchemaVersion   *int64             `json:"NextSchemaVersion"`
	RegistryArn         *string            `json:"RegistryArn"`
	RegistryName        *string            `json:"RegistryName"`
	SchemaArn           *string            `json:"SchemaArn"`
	SchemaCheckpoint    *int64             `json:"SchemaCheckpoint"`
	SchemaName          *string            `json:"SchemaName"`
	SchemaStatus        *SchemaStatusEnum  `json:"SchemaStatus"`
	UpdatedTime         *string            `json:"UpdatedTime"`
}
