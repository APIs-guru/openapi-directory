package shared

type HTTPDataSourceConfig struct {
	AuthorizationConfig *AuthorizationConfig `json:"authorizationConfig"`
	Endpoint            *string              `json:"endpoint"`
}
