package shared

type SslProtocolEnum string

const (
	SslProtocolEnumSsLv3  SslProtocolEnum = "SSLv3"
	SslProtocolEnumTlSv1  SslProtocolEnum = "TLSv1"
	SslProtocolEnumTlSv11 SslProtocolEnum = "TLSv1.1"
	SslProtocolEnumTlSv12 SslProtocolEnum = "TLSv1.2"
)
