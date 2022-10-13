package shared

type GlueTable struct {
	CatalogID      *string `json:"CatalogId"`
	ConnectionName *string `json:"ConnectionName"`
	DatabaseName   string  `json:"DatabaseName"`
	TableName      string  `json:"TableName"`
}
