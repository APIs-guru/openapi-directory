package shared

// ForgotPasswordRequest
// Represents the request to reset a user's password.
type ForgotPasswordRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata,omitempty"`
	SecretHash        *string                `json:"SecretHash,omitempty"`
	UserContextData   *UserContextDataType   `json:"UserContextData,omitempty"`
	Username          string                 `json:"Username"`
}
