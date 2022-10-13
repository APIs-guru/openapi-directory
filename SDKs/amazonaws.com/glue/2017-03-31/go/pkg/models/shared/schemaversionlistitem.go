package shared

type SchemaVersionListItem struct {
	CreatedTime     *string                  `json:"CreatedTime"`
	SchemaArn       *string                  `json:"SchemaArn"`
	SchemaVersionID *string                  `json:"SchemaVersionId"`
	Status          *SchemaVersionStatusEnum `json:"Status"`
	VersionNumber   *int64                   `json:"VersionNumber"`
}
