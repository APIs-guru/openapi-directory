package shared

type ListDataCatalogsOutput struct {
	DataCatalogsSummary []DataCatalogSummary `json:"DataCatalogsSummary"`
	NextToken           *string              `json:"NextToken"`
}
