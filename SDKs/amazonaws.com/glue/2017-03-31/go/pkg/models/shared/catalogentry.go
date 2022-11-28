package shared

// CatalogEntry
// Specifies a table definition in the Glue Data Catalog.
type CatalogEntry struct {
	DatabaseName string `json:"DatabaseName"`
	TableName    string `json:"TableName"`
}
