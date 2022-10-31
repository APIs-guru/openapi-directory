package shared



type BatchDeleteTableRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    TablesToDelete []string `json:"TablesToDelete"`
    
}

