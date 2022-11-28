package shared

// AuthorizerConfig
// An object that specifies the authorization service for a domain.
type AuthorizerConfig struct {
	AllowAuthorizerOverride *bool   `json:"allowAuthorizerOverride,omitempty"`
	DefaultAuthorizerName   *string `json:"defaultAuthorizerName,omitempty"`
}
