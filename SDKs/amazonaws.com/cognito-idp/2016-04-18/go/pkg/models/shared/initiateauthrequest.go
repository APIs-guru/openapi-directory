package shared

type InitiateAuthRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	AuthFlow          AuthFlowTypeEnum       `json:"AuthFlow"`
	AuthParameters    map[string]string      `json:"AuthParameters,omitempty"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata,omitempty"`
	UserContextData   *UserContextDataType   `json:"UserContextData,omitempty"`
}
