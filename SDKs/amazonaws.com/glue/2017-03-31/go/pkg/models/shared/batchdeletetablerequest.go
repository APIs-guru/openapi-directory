package shared

type BatchDeleteTableRequest struct {
	CatalogID      *string  `json:"CatalogId"`
	DatabaseName   string   `json:"DatabaseName"`
	TablesToDelete []string `json:"TablesToDelete"`
}
