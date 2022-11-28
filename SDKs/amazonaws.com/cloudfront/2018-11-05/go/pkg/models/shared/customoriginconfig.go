package shared

// CustomOriginConfig
// A customer origin or an Amazon S3 bucket configured as a website endpoint.
type CustomOriginConfig struct {
	HTTPPort               int64
	HTTPSPort              int64
	OriginKeepaliveTimeout *int64
	OriginProtocolPolicy   OriginProtocolPolicyEnum
	OriginReadTimeout      *int64
	OriginSslProtocols     *OriginSslProtocols
}
