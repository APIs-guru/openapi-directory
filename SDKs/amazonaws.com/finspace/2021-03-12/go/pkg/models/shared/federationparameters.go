package shared



type FederationParameters struct {
    ApplicationCallBackURL *string `json:"applicationCallBackURL,omitempty"`
    AttributeMap map[string]string `json:"attributeMap,omitempty"`
    FederationProviderName *string `json:"federationProviderName,omitempty"`
    FederationUrn *string `json:"federationURN,omitempty"`
    SamlMetadataDocument *string `json:"samlMetadataDocument,omitempty"`
    SamlMetadataURL *string `json:"samlMetadataURL,omitempty"`
    
}

