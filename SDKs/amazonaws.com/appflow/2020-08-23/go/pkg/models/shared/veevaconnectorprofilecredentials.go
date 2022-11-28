package shared

// VeevaConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using Veeva.
type VeevaConnectorProfileCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}
