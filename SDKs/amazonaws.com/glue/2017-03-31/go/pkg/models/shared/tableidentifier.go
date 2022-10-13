package shared

type TableIdentifier struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName *string `json:"DatabaseName"`
	Name         *string `json:"Name"`
}
