package shared

type ResendConfirmationCodeRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata"`
	SecretHash        *string                `json:"SecretHash"`
	UserContextData   *UserContextDataType   `json:"UserContextData"`
	Username          string                 `json:"Username"`
}
