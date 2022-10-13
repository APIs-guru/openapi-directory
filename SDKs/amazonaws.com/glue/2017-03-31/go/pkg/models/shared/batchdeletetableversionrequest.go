package shared

type BatchDeleteTableVersionRequest struct {
	CatalogID    *string  `json:"CatalogId"`
	DatabaseName string   `json:"DatabaseName"`
	TableName    string   `json:"TableName"`
	VersionIds   []string `json:"VersionIds"`
}
