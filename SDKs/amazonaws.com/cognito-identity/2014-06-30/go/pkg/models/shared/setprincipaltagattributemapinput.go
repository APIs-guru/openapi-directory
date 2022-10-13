package shared

type SetPrincipalTagAttributeMapInput struct {
	IdentityPoolID       string            `json:"IdentityPoolId"`
	IdentityProviderName string            `json:"IdentityProviderName"`
	PrincipalTags        map[string]string `json:"PrincipalTags"`
	UseDefaults          *bool             `json:"UseDefaults"`
}
