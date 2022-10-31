package shared



type ListDataCatalogsOutput struct {
    DataCatalogsSummary []DataCatalogSummary `json:"DataCatalogsSummary,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

