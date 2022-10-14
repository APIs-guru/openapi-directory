package shared

type ProviderUserIdentifierType struct {
	ProviderAttributeName  *string `json:"ProviderAttributeName,omitempty"`
	ProviderAttributeValue *string `json:"ProviderAttributeValue,omitempty"`
	ProviderName           *string `json:"ProviderName,omitempty"`
}
