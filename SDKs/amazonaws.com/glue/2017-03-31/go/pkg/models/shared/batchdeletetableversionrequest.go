package shared



type BatchDeleteTableVersionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    TableName string `json:"TableName"`
    VersionIds []string `json:"VersionIds"`
    
}

