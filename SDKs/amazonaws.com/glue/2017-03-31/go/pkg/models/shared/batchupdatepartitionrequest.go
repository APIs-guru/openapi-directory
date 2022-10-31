package shared



type BatchUpdatePartitionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    Entries []BatchUpdatePartitionRequestEntry `json:"Entries"`
    TableName string `json:"TableName"`
    
}

