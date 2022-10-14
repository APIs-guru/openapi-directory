package shared

type UpdateConnectionRequest struct {
	CatalogID       *string         `json:"CatalogId,omitempty"`
	ConnectionInput ConnectionInput `json:"ConnectionInput"`
	Name            string          `json:"Name"`
}
