package shared

type DataCatalogSummary struct {
	CatalogName *string              `json:"CatalogName,omitempty"`
	Type        *DataCatalogTypeEnum `json:"Type,omitempty"`
}
