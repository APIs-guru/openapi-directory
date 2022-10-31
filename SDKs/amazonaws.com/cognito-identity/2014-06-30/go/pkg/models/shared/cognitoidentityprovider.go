package shared



type CognitoIdentityProvider struct {
    ClientID *string `json:"ClientId,omitempty"`
    ProviderName *string `json:"ProviderName,omitempty"`
    ServerSideTokenCheck *bool `json:"ServerSideTokenCheck,omitempty"`
    
}

