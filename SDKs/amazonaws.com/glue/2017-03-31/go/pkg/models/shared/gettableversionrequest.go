package shared

type GetTableVersionRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	TableName    string  `json:"TableName"`
	VersionID    *string `json:"VersionId"`
}
