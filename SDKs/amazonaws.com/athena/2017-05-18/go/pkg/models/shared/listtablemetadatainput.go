package shared



type ListTableMetadataInput struct {
    CatalogName string `json:"CatalogName"`
    DatabaseName string `json:"DatabaseName"`
    Expression *string `json:"Expression,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

