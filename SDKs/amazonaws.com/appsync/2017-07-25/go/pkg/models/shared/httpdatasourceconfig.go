package shared

// HTTPDataSourceConfig
// Describes an HTTP data source configuration.
type HTTPDataSourceConfig struct {
	AuthorizationConfig *AuthorizationConfig `json:"authorizationConfig,omitempty"`
	Endpoint            *string              `json:"endpoint,omitempty"`
}
