package shared



type GetPartitionIndexesRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    NextToken *string `json:"NextToken,omitempty"`
    TableName string `json:"TableName"`
    
}

