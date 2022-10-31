package shared



type BatchDeleteConnectionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    ConnectionNameList []string `json:"ConnectionNameList"`
    
}

