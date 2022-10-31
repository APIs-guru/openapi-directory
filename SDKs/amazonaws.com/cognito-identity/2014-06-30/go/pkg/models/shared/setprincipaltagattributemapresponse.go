package shared



type SetPrincipalTagAttributeMapResponse struct {
    IdentityPoolID *string `json:"IdentityPoolId,omitempty"`
    IdentityProviderName *string `json:"IdentityProviderName,omitempty"`
    PrincipalTags map[string]string `json:"PrincipalTags,omitempty"`
    UseDefaults *bool `json:"UseDefaults,omitempty"`
    
}

