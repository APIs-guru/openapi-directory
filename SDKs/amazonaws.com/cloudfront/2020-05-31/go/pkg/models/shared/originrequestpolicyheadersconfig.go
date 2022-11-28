package shared

// OriginRequestPolicyHeadersConfig
// An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
type OriginRequestPolicyHeadersConfig struct {
	HeaderBehavior OriginRequestPolicyHeaderBehaviorEnum
	Headers        *Headers
}
