package shared

// ConfirmSignUpRequest
// Represents the request to confirm registration of a user.
type ConfirmSignUpRequest struct {
	AnalyticsMetadata  *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ClientID           string                 `json:"ClientId"`
	ClientMetadata     map[string]string      `json:"ClientMetadata,omitempty"`
	ConfirmationCode   string                 `json:"ConfirmationCode"`
	ForceAliasCreation *bool                  `json:"ForceAliasCreation,omitempty"`
	SecretHash         *string                `json:"SecretHash,omitempty"`
	UserContextData    *UserContextDataType   `json:"UserContextData,omitempty"`
	Username           string                 `json:"Username"`
}
