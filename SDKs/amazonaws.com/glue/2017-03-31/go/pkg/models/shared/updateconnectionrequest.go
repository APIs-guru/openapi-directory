package shared

type UpdateConnectionRequest struct {
	CatalogID       *string         `json:"CatalogId"`
	ConnectionInput ConnectionInput `json:"ConnectionInput"`
	Name            string          `json:"Name"`
}
