package shared

type SignUpRequest struct {
	AnalyticsMetadata *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	ClientID          string                 `json:"ClientId"`
	ClientMetadata    map[string]string      `json:"ClientMetadata"`
	Password          string                 `json:"Password"`
	SecretHash        *string                `json:"SecretHash"`
	UserAttributes    []AttributeType        `json:"UserAttributes"`
	UserContextData   *UserContextDataType   `json:"UserContextData"`
	Username          string                 `json:"Username"`
	ValidationData    []AttributeType        `json:"ValidationData"`
}
