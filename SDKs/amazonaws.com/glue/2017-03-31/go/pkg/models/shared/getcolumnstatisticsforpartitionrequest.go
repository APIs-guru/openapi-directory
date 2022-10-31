package shared



type GetColumnStatisticsForPartitionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    ColumnNames []string `json:"ColumnNames"`
    DatabaseName string `json:"DatabaseName"`
    PartitionValues []string `json:"PartitionValues"`
    TableName string `json:"TableName"`
    
}

