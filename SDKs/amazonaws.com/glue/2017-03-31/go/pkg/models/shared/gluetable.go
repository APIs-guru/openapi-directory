package shared



type GlueTable struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    ConnectionName *string `json:"ConnectionName,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    TableName string `json:"TableName"`
    
}

