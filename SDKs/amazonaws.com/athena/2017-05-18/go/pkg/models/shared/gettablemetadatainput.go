package shared

type GetTableMetadataInput struct {
	CatalogName  string `json:"CatalogName"`
	DatabaseName string `json:"DatabaseName"`
	TableName    string `json:"TableName"`
}
