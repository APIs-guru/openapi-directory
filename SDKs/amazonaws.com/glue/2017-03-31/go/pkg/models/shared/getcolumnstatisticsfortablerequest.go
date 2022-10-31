package shared



type GetColumnStatisticsForTableRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    ColumnNames []string `json:"ColumnNames"`
    DatabaseName string `json:"DatabaseName"`
    TableName string `json:"TableName"`
    
}

