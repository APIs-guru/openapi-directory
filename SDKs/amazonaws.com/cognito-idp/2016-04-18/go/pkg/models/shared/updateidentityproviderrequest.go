package shared



type UpdateIdentityProviderRequest struct {
    AttributeMapping map[string]string `json:"AttributeMapping,omitempty"`
    IdpIdentifiers []string `json:"IdpIdentifiers,omitempty"`
    ProviderDetails map[string]string `json:"ProviderDetails,omitempty"`
    ProviderName string `json:"ProviderName"`
    UserPoolID string `json:"UserPoolId"`
    
}

