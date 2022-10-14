package shared

type CreateDatabaseRequest struct {
	CatalogID     *string       `json:"CatalogId,omitempty"`
	DatabaseInput DatabaseInput `json:"DatabaseInput"`
}
