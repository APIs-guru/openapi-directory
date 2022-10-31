package shared

type UpdateConnectionAPIKeyAuthRequestParameters struct {
	APIKeyName  *string `json:"ApiKeyName,omitempty"`
	APIKeyValue *string `json:"ApiKeyValue,omitempty"`
}
