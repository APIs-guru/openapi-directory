package shared

type ListIdentityProvidersResponse struct {
	NextToken *string               `json:"NextToken"`
	Providers []ProviderDescription `json:"Providers"`
}
