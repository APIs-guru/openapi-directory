package shared



type ListIdentityProviderConfigsResponse struct {
    IdentityProviderConfigs []IdentityProviderConfig `json:"identityProviderConfigs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

