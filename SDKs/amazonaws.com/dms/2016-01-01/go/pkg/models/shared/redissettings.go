package shared

type RedisSettings struct {
	AuthPassword        *string                       `json:"AuthPassword"`
	AuthType            *RedisAuthTypeValueEnum       `json:"AuthType"`
	AuthUserName        *string                       `json:"AuthUserName"`
	Port                int64                         `json:"Port"`
	ServerName          string                        `json:"ServerName"`
	SslCaCertificateArn *string                       `json:"SslCaCertificateArn"`
	SslSecurityProtocol *SslSecurityProtocolValueEnum `json:"SslSecurityProtocol"`
}
