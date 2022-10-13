package shared

type ConfirmSignUpRequest struct {
	AnalyticsMetadata  *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	ClientID           string                 `json:"ClientId"`
	ClientMetadata     map[string]string      `json:"ClientMetadata"`
	ConfirmationCode   string                 `json:"ConfirmationCode"`
	ForceAliasCreation *bool                  `json:"ForceAliasCreation"`
	SecretHash         *string                `json:"SecretHash"`
	UserContextData    *UserContextDataType   `json:"UserContextData"`
	Username           string                 `json:"Username"`
}
