package shared

// GlueTable
// The database and table in the Glue Data Catalog that is used for input or output data.
type GlueTable struct {
	CatalogID      *string `json:"CatalogId,omitempty"`
	ConnectionName *string `json:"ConnectionName,omitempty"`
	DatabaseName   string  `json:"DatabaseName"`
	TableName      string  `json:"TableName"`
}
