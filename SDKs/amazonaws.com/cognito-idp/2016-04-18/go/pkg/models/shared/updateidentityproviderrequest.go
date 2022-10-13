package shared

type UpdateIdentityProviderRequest struct {
	AttributeMapping map[string]string `json:"AttributeMapping"`
	IdpIdentifiers   []string          `json:"IdpIdentifiers"`
	ProviderDetails  map[string]string `json:"ProviderDetails"`
	ProviderName     string            `json:"ProviderName"`
	UserPoolID       string            `json:"UserPoolId"`
}
