package shared

// SnowflakeConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using Snowflake.
type SnowflakeConnectorProfileCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}
