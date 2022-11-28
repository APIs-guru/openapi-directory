package shared

// ConnectionAPIKeyAuthResponseParameters
// Contains the authorization parameters for the connection if API Key is specified as the authorization type.
type ConnectionAPIKeyAuthResponseParameters struct {
	APIKeyName *string `json:"ApiKeyName,omitempty"`
}
