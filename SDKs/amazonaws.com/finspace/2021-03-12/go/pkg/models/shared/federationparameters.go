package shared

type FederationParameters struct {
	ApplicationCallBackURL *string           `json:"applicationCallBackURL"`
	AttributeMap           map[string]string `json:"attributeMap"`
	FederationProviderName *string           `json:"federationProviderName"`
	FederationUrn          *string           `json:"federationURN"`
	SamlMetadataDocument   *string           `json:"samlMetadataDocument"`
	SamlMetadataURL        *string           `json:"samlMetadataURL"`
}
