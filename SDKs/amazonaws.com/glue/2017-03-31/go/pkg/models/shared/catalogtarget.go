package shared

type CatalogTarget struct {
	DatabaseName string   `json:"DatabaseName"`
	Tables       []string `json:"Tables"`
}
