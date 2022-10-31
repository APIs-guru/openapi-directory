package shared

type ListIdentityProvidersResponse struct {
	NextToken *string               `json:"NextToken,omitempty"`
	Providers []ProviderDescription `json:"Providers"`
}
