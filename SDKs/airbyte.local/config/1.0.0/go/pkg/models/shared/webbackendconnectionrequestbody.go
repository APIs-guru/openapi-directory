package shared



type WebBackendConnectionRequestBody struct {
    ConnectionID string `json:"connectionId"`
    WithRefreshedCatalog *bool `json:"withRefreshedCatalog,omitempty"`
    
}

