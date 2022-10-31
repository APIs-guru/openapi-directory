package shared

type SchemaVersionListItem struct {
	CreatedTime     *string                  `json:"CreatedTime,omitempty"`
	SchemaArn       *string                  `json:"SchemaArn,omitempty"`
	SchemaVersionID *string                  `json:"SchemaVersionId,omitempty"`
	Status          *SchemaVersionStatusEnum `json:"Status,omitempty"`
	VersionNumber   *int64                   `json:"VersionNumber,omitempty"`
}
