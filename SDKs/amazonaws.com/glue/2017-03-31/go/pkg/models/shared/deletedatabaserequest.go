package shared

type DeleteDatabaseRequest struct {
	CatalogID *string `json:"CatalogId,omitempty"`
	Name      string  `json:"Name"`
}
