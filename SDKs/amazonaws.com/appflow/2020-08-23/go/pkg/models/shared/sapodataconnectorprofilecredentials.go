package shared

// SapoDataConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using SAPOData.
type SapoDataConnectorProfileCredentials struct {
	BasicAuthCredentials *BasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	OAuthCredentials     *OAuthCredentials     `json:"oAuthCredentials,omitempty"`
}
