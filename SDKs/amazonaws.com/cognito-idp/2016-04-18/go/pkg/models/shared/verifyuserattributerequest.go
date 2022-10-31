package shared



type VerifyUserAttributeRequest struct {
    AccessToken string `json:"AccessToken"`
    AttributeName string `json:"AttributeName"`
    Code string `json:"Code"`
    
}

