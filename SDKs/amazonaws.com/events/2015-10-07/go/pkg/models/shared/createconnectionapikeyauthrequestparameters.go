package shared

// CreateConnectionAPIKeyAuthRequestParameters
// Contains the API key authorization parameters for the connection.
type CreateConnectionAPIKeyAuthRequestParameters struct {
	APIKeyName  string `json:"ApiKeyName"`
	APIKeyValue string `json:"ApiKeyValue"`
}
