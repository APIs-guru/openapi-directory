package shared



type CreateConnectionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    ConnectionInput ConnectionInput `json:"ConnectionInput"`
    
}

