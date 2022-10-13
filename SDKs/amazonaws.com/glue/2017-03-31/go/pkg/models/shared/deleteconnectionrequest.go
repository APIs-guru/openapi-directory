package shared

type DeleteConnectionRequest struct {
	CatalogID      *string `json:"CatalogId"`
	ConnectionName string  `json:"ConnectionName"`
}
