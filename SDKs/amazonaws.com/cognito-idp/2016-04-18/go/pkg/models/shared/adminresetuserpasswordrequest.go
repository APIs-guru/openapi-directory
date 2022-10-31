package shared



type AdminResetUserPasswordRequest struct {
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    
}

