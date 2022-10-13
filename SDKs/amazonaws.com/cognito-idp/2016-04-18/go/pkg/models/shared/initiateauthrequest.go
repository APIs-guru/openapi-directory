package shared

type InitiateAuthRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	AuthFlow          AuthFlowTypeEnum       `json:"AuthFlow"`
	AuthParameters    map[string]string      `json:"AuthParameters"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata"`
	UserContextData   *UserContextDataType   `json:"UserContextData"`
}
