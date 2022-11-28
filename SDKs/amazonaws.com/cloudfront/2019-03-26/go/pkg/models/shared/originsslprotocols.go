package shared

// OriginSslProtocols
// A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
type OriginSslProtocols struct {
	Items    []SslProtocolEnum
	Quantity int64
}
