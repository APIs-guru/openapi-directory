package shared

type GetDatabaseRequest struct {
	CatalogID *string `json:"CatalogId,omitempty"`
	Name      string  `json:"Name"`
}
