package shared

type ProviderUserIdentifierType struct {
	ProviderAttributeName  *string `json:"ProviderAttributeName"`
	ProviderAttributeValue *string `json:"ProviderAttributeValue"`
	ProviderName           *string `json:"ProviderName"`
}
