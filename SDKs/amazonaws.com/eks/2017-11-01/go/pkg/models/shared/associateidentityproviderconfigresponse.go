package shared

type AssociateIdentityProviderConfigResponse struct {
	Tags   map[string]string `json:"tags,omitempty"`
	Update *Update           `json:"update,omitempty"`
}
