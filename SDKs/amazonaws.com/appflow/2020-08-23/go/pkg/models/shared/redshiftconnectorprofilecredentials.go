package shared

// RedshiftConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using Amazon Redshift.
type RedshiftConnectorProfileCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}
