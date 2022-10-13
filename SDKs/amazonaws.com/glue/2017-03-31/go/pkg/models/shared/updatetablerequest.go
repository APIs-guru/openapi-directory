package shared

type UpdateTableRequest struct {
	CatalogID    *string    `json:"CatalogId"`
	DatabaseName string     `json:"DatabaseName"`
	SkipArchive  *bool      `json:"SkipArchive"`
	TableInput   TableInput `json:"TableInput"`
}
