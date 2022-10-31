package shared



type OAuthProperties struct {
    AuthCodeURL string `json:"authCodeUrl"`
    OAuthScopes []string `json:"oAuthScopes"`
    TokenURL string `json:"tokenUrl"`
    
}

