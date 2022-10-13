package shared

type AuthorizerConfig struct {
	AllowAuthorizerOverride *bool   `json:"allowAuthorizerOverride"`
	DefaultAuthorizerName   *string `json:"defaultAuthorizerName"`
}
