package shared

type MethodSnapshot struct {
	APIKeyRequired    *bool   `json:"apiKeyRequired,omitempty"`
	AuthorizationType *string `json:"authorizationType,omitempty"`
}
