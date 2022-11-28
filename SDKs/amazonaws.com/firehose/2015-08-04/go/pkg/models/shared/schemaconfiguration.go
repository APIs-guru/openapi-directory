package shared

// SchemaConfiguration
// Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
type SchemaConfiguration struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName *string `json:"DatabaseName,omitempty"`
	Region       *string `json:"Region,omitempty"`
	RoleArn      *string `json:"RoleARN,omitempty"`
	TableName    *string `json:"TableName,omitempty"`
	VersionID    *string `json:"VersionId,omitempty"`
}
