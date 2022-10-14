package shared

type SetPrincipalTagAttributeMapInput struct {
	IdentityPoolID       string            `json:"IdentityPoolId"`
	IdentityProviderName string            `json:"IdentityProviderName"`
	PrincipalTags        map[string]string `json:"PrincipalTags,omitempty"`
	UseDefaults          *bool             `json:"UseDefaults,omitempty"`
}
