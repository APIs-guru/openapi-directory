package shared

type DeleteDatabaseRequest struct {
	CatalogID *string `json:"CatalogId"`
	Name      string  `json:"Name"`
}
