package shared

type CreateDatabaseRequest struct {
	CatalogID     *string       `json:"CatalogId"`
	DatabaseInput DatabaseInput `json:"DatabaseInput"`
}
