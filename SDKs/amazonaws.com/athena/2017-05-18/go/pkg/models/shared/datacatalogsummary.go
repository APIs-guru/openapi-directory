package shared

// DataCatalogSummary
// The summary information for the data catalog, which includes its name and type.
type DataCatalogSummary struct {
	CatalogName *string              `json:"CatalogName,omitempty"`
	Type        *DataCatalogTypeEnum `json:"Type,omitempty"`
}
