package shared



type CreateSecurityConfigurationRequest struct {
    EncryptionConfiguration EncryptionConfiguration `json:"EncryptionConfiguration"`
    Name string `json:"Name"`
    
}

