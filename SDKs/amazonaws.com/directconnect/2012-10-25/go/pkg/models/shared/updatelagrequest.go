package shared



type UpdateLagRequest struct {
    EncryptionMode *string `json:"encryptionMode,omitempty"`
    LagID string `json:"lagId"`
    LagName *string `json:"lagName,omitempty"`
    MinimumLinks *int64 `json:"minimumLinks,omitempty"`
    
}

