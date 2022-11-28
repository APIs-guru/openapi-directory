package shared

// ConfirmForgotPasswordRequest
// The request representing the confirmation for a password reset.
type ConfirmForgotPasswordRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata,omitempty"`
	ConfirmationCode  string                 `json:"ConfirmationCode"`
	Password          string                 `json:"Password"`
	SecretHash        *string                `json:"SecretHash,omitempty"`
	UserContextData   *UserContextDataType   `json:"UserContextData,omitempty"`
	Username          string                 `json:"Username"`
}
