package shared

type AdminInitiateAuthRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	AuthFlow          AuthFlowTypeEnum       `json:"AuthFlow"`
	AuthParameters    map[string]string      `json:"AuthParameters"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata"`
	ContextData       *ContextDataType       `json:"ContextData"`
	UserPoolID        string                 `json:"UserPoolId"`
}
