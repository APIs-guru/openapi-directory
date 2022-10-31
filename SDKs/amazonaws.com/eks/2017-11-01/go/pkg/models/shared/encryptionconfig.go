package shared



type EncryptionConfig struct {
    Provider *Provider `json:"provider,omitempty"`
    Resources []string `json:"resources,omitempty"`
    
}

