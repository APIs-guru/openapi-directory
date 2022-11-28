package shared

// CatalogTarget
// Specifies an Glue Data Catalog target.
type CatalogTarget struct {
	DatabaseName string   `json:"DatabaseName"`
	Tables       []string `json:"Tables"`
}
