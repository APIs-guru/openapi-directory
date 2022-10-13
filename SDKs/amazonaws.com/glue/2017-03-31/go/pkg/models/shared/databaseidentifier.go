package shared

type DatabaseIdentifier struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName *string `json:"DatabaseName"`
}
