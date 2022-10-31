package shared



type UpdateConnectionRequest struct {
    ConnectionID string `json:"connectionId"`
    ConnectionName *string `json:"connectionName,omitempty"`
    EncryptionMode *string `json:"encryptionMode,omitempty"`
    
}

