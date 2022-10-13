package shared

type AssociateIdentityProviderConfigResponse struct {
	Tags   map[string]string `json:"tags"`
	Update *Update           `json:"update"`
}
