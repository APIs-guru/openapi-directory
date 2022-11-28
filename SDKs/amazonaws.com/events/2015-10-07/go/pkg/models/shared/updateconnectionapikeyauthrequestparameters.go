package shared

// UpdateConnectionAPIKeyAuthRequestParameters
// Contains the API key authorization parameters to use to update the connection.
type UpdateConnectionAPIKeyAuthRequestParameters struct {
	APIKeyName  *string `json:"ApiKeyName,omitempty"`
	APIKeyValue *string `json:"ApiKeyValue,omitempty"`
}
