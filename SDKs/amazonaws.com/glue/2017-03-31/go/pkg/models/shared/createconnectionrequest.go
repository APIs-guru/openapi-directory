package shared

type CreateConnectionRequest struct {
	CatalogID       *string         `json:"CatalogId"`
	ConnectionInput ConnectionInput `json:"ConnectionInput"`
}
