package shared

type HTTPDataSourceConfig struct {
	AuthorizationConfig *AuthorizationConfig `json:"authorizationConfig,omitempty"`
	Endpoint            *string              `json:"endpoint,omitempty"`
}
