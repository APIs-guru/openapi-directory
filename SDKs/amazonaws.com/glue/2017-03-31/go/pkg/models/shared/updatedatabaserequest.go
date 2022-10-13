package shared

type UpdateDatabaseRequest struct {
	CatalogID     *string       `json:"CatalogId"`
	DatabaseInput DatabaseInput `json:"DatabaseInput"`
	Name          string        `json:"Name"`
}
