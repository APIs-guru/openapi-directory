package shared



type ConfirmSignUpRequest struct {
    AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
    ClientID string `json:"ClientId"`
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    ConfirmationCode string `json:"ConfirmationCode"`
    ForceAliasCreation *bool `json:"ForceAliasCreation,omitempty"`
    SecretHash *string `json:"SecretHash,omitempty"`
    UserContextData *UserContextDataType `json:"UserContextData,omitempty"`
    Username string `json:"Username"`
    
}

