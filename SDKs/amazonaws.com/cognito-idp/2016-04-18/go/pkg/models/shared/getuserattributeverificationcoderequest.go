package shared



type GetUserAttributeVerificationCodeRequest struct {
    AccessToken string `json:"AccessToken"`
    AttributeName string `json:"AttributeName"`
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    
}

