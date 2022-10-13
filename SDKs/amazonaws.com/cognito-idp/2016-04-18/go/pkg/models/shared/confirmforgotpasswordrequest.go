package shared

type ConfirmForgotPasswordRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata"`
	ConfirmationCode  string                 `json:"ConfirmationCode"`
	Password          string                 `json:"Password"`
	SecretHash        *string                `json:"SecretHash"`
	UserContextData   *UserContextDataType   `json:"UserContextData"`
	Username          string                 `json:"Username"`
}
