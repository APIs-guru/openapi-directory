package shared

type BatchDeleteConnectionRequest struct {
	CatalogID          *string  `json:"CatalogId"`
	ConnectionNameList []string `json:"ConnectionNameList"`
}
