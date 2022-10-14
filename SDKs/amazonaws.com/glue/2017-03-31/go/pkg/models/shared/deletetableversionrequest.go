package shared

type DeleteTableVersionRequest struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName string  `json:"DatabaseName"`
	TableName    string  `json:"TableName"`
	VersionID    string  `json:"VersionId"`
}
