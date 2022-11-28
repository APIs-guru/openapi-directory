package shared

// CustomOriginConfig
// A customer origin.
type CustomOriginConfig struct {
	HTTPPort             int64
	HTTPSPort            int64
	OriginProtocolPolicy OriginProtocolPolicyEnum
	OriginSslProtocols   *OriginSslProtocols
}
