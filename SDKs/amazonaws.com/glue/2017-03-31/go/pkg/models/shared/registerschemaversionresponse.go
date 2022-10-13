package shared

type RegisterSchemaVersionResponse struct {
	SchemaVersionID *string                  `json:"SchemaVersionId"`
	Status          *SchemaVersionStatusEnum `json:"Status"`
	VersionNumber   *int64                   `json:"VersionNumber"`
}
