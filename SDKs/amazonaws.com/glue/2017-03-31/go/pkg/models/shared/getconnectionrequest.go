package shared



type GetConnectionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    HidePassword *bool `json:"HidePassword,omitempty"`
    Name string `json:"Name"`
    
}

