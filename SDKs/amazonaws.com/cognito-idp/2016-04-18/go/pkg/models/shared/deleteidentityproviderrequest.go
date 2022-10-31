package shared



type DeleteIdentityProviderRequest struct {
    ProviderName string `json:"ProviderName"`
    UserPoolID string `json:"UserPoolId"`
    
}

