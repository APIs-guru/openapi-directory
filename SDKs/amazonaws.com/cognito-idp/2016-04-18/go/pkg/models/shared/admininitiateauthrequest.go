package shared



type AdminInitiateAuthRequest struct {
    AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
    AuthFlow AuthFlowTypeEnum `json:"AuthFlow"`
    AuthParameters map[string]string `json:"AuthParameters,omitempty"`
    ClientID string `json:"ClientId"`
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    ContextData *ContextDataType `json:"ContextData,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    
}

