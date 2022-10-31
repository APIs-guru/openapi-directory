package shared

type ForgotPasswordRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata,omitempty"`
	SecretHash        *string                `json:"SecretHash,omitempty"`
	UserContextData   *UserContextDataType   `json:"UserContextData,omitempty"`
	Username          string                 `json:"Username"`
}
