package shared

type GetSchemaByDefinitionResponse struct {
	CreatedTime     *string                  `json:"CreatedTime"`
	DataFormat      *DataFormatEnum          `json:"DataFormat"`
	SchemaArn       *string                  `json:"SchemaArn"`
	SchemaVersionID *string                  `json:"SchemaVersionId"`
	Status          *SchemaVersionStatusEnum `json:"Status"`
}
