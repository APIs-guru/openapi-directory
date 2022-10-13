package shared

type DataCatalogSummary struct {
	CatalogName *string              `json:"CatalogName"`
	Type        *DataCatalogTypeEnum `json:"Type"`
}
