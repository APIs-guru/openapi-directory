package shared

type DeleteConnectionRequest struct {
	CatalogID      *string `json:"CatalogId,omitempty"`
	ConnectionName string  `json:"ConnectionName"`
}
