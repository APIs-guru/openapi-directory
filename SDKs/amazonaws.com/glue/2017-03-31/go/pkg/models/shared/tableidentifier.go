package shared



type TableIdentifier struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName *string `json:"DatabaseName,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}

