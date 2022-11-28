package shared

// ResendConfirmationCodeRequest
// Represents the request to resend the confirmation code.
type ResendConfirmationCodeRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata,omitempty"`
	SecretHash        *string                `json:"SecretHash,omitempty"`
	UserContextData   *UserContextDataType   `json:"UserContextData,omitempty"`
	Username          string                 `json:"Username"`
}
