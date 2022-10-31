package shared



type SignUpRequest struct {
    AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
    ClientID string `json:"ClientId"`
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    Password string `json:"Password"`
    SecretHash *string `json:"SecretHash,omitempty"`
    UserAttributes []AttributeType `json:"UserAttributes,omitempty"`
    UserContextData *UserContextDataType `json:"UserContextData,omitempty"`
    Username string `json:"Username"`
    ValidationData []AttributeType `json:"ValidationData,omitempty"`
    
}

