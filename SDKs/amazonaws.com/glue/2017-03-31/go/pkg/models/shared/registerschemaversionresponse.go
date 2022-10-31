package shared

type RegisterSchemaVersionResponse struct {
	SchemaVersionID *string                  `json:"SchemaVersionId,omitempty"`
	Status          *SchemaVersionStatusEnum `json:"Status,omitempty"`
	VersionNumber   *int64                   `json:"VersionNumber,omitempty"`
}
