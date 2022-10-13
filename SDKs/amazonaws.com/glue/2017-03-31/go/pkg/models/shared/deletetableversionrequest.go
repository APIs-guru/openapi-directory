package shared

type DeleteTableVersionRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	TableName    string  `json:"TableName"`
	VersionID    string  `json:"VersionId"`
}
