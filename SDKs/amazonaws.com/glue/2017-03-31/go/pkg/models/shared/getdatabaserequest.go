package shared

type GetDatabaseRequest struct {
	CatalogID *string `json:"CatalogId"`
	Name      string  `json:"Name"`
}
