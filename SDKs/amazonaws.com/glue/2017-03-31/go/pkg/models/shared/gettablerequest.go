package shared



type GetTableRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    Name string `json:"Name"`
    
}

