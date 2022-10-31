package shared



type DataCatalogEncryptionSettings struct {
    ConnectionPasswordEncryption *ConnectionPasswordEncryption `json:"ConnectionPasswordEncryption,omitempty"`
    EncryptionAtRest *EncryptionAtRest `json:"EncryptionAtRest,omitempty"`
    
}

