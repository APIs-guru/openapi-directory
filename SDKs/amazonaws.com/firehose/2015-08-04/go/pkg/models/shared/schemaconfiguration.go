package shared

type SchemaConfiguration struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName *string `json:"DatabaseName"`
	Region       *string `json:"Region"`
	RoleArn      *string `json:"RoleARN"`
	TableName    *string `json:"TableName"`
	VersionID    *string `json:"VersionId"`
}
