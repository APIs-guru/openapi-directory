package shared

// ProviderUserIdentifierType
// A container for information about an identity provider for a user pool.
type ProviderUserIdentifierType struct {
	ProviderAttributeName  *string `json:"ProviderAttributeName,omitempty"`
	ProviderAttributeValue *string `json:"ProviderAttributeValue,omitempty"`
	ProviderName           *string `json:"ProviderName,omitempty"`
}
