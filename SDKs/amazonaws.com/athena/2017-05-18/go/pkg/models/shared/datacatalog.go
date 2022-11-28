package shared

// DataCatalog
// Contains information about a data catalog in an Amazon Web Services account.
type DataCatalog struct {
	Description *string             `json:"Description,omitempty"`
	Name        string              `json:"Name"`
	Parameters  map[string]string   `json:"Parameters,omitempty"`
	Type        DataCatalogTypeEnum `json:"Type"`
}
