package shared



type AssociateSoftwareTokenResponse struct {
    SecretCode *string `json:"SecretCode,omitempty"`
    Session *string `json:"Session,omitempty"`
    
}

