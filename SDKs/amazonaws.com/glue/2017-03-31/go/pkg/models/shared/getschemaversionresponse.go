package shared

type GetSchemaVersionResponse struct {
	CreatedTime      *string                  `json:"CreatedTime,omitempty"`
	DataFormat       *DataFormatEnum          `json:"DataFormat,omitempty"`
	SchemaArn        *string                  `json:"SchemaArn,omitempty"`
	SchemaDefinition *string                  `json:"SchemaDefinition,omitempty"`
	SchemaVersionID  *string                  `json:"SchemaVersionId,omitempty"`
	Status           *SchemaVersionStatusEnum `json:"Status,omitempty"`
	VersionNumber    *int64                   `json:"VersionNumber,omitempty"`
}
