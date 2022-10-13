package shared

type GetConnectionRequest struct {
	CatalogID    *string `json:"CatalogId"`
	HidePassword *bool   `json:"HidePassword"`
	Name         string  `json:"Name"`
}
