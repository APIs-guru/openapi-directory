package shared

type GetSchemaResponse struct {
	Compatibility       *CompatibilityEnum `json:"Compatibility,omitempty"`
	CreatedTime         *string            `json:"CreatedTime,omitempty"`
	DataFormat          *DataFormatEnum    `json:"DataFormat,omitempty"`
	Description         *string            `json:"Description,omitempty"`
	LatestSchemaVersion *int64             `json:"LatestSchemaVersion,omitempty"`
	NextSchemaVersion   *int64             `json:"NextSchemaVersion,omitempty"`
	RegistryArn         *string            `json:"RegistryArn,omitempty"`
	RegistryName        *string            `json:"RegistryName,omitempty"`
	SchemaArn           *string            `json:"SchemaArn,omitempty"`
	SchemaCheckpoint    *int64             `json:"SchemaCheckpoint,omitempty"`
	SchemaName          *string            `json:"SchemaName,omitempty"`
	SchemaStatus        *SchemaStatusEnum  `json:"SchemaStatus,omitempty"`
	UpdatedTime         *string            `json:"UpdatedTime,omitempty"`
}
