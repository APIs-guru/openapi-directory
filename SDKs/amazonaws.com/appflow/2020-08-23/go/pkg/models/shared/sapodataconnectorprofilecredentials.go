package shared

type SapoDataConnectorProfileCredentials struct {
	BasicAuthCredentials *BasicAuthCredentials `json:"basicAuthCredentials"`
	OAuthCredentials     *OAuthCredentials     `json:"oAuthCredentials"`
}
