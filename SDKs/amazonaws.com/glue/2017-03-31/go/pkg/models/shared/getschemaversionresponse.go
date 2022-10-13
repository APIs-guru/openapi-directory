package shared

type GetSchemaVersionResponse struct {
	CreatedTime      *string                  `json:"CreatedTime"`
	DataFormat       *DataFormatEnum          `json:"DataFormat"`
	SchemaArn        *string                  `json:"SchemaArn"`
	SchemaDefinition *string                  `json:"SchemaDefinition"`
	SchemaVersionID  *string                  `json:"SchemaVersionId"`
	Status           *SchemaVersionStatusEnum `json:"Status"`
	VersionNumber    *int64                   `json:"VersionNumber"`
}
