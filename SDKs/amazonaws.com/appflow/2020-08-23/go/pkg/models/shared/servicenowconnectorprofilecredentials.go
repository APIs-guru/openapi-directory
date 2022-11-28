package shared

// ServiceNowConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using ServiceNow.
type ServiceNowConnectorProfileCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}
