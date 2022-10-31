package shared



type GetTableVersionsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TableName string `json:"TableName"`
    
}

