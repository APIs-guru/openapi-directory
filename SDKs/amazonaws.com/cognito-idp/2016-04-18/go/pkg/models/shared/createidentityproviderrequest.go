package shared

type CreateIdentityProviderRequest struct {
	AttributeMapping map[string]string            `json:"AttributeMapping"`
	IdpIdentifiers   []string                     `json:"IdpIdentifiers"`
	ProviderDetails  map[string]string            `json:"ProviderDetails"`
	ProviderName     string                       `json:"ProviderName"`
	ProviderType     IdentityProviderTypeTypeEnum `json:"ProviderType"`
	UserPoolID       string                       `json:"UserPoolId"`
}
