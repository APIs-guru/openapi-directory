package shared

type GetSchemaByDefinitionResponse struct {
	CreatedTime     *string                  `json:"CreatedTime,omitempty"`
	DataFormat      *DataFormatEnum          `json:"DataFormat,omitempty"`
	SchemaArn       *string                  `json:"SchemaArn,omitempty"`
	SchemaVersionID *string                  `json:"SchemaVersionId,omitempty"`
	Status          *SchemaVersionStatusEnum `json:"Status,omitempty"`
}
