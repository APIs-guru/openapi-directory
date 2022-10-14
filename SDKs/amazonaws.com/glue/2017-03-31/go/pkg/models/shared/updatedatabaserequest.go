package shared

type UpdateDatabaseRequest struct {
	CatalogID     *string       `json:"CatalogId,omitempty"`
	DatabaseInput DatabaseInput `json:"DatabaseInput"`
	Name          string        `json:"Name"`
}
