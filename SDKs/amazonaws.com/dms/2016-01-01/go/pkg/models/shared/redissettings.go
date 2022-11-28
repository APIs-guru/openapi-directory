package shared

// RedisSettings
// Provides information that defines a Redis target endpoint.
type RedisSettings struct {
	AuthPassword        *string                       `json:"AuthPassword,omitempty"`
	AuthType            *RedisAuthTypeValueEnum       `json:"AuthType,omitempty"`
	AuthUserName        *string                       `json:"AuthUserName,omitempty"`
	Port                int64                         `json:"Port"`
	ServerName          string                        `json:"ServerName"`
	SslCaCertificateArn *string                       `json:"SslCaCertificateArn,omitempty"`
	SslSecurityProtocol *SslSecurityProtocolValueEnum `json:"SslSecurityProtocol,omitempty"`
}
