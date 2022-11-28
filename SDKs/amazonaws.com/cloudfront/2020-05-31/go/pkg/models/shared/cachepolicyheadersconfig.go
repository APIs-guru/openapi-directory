package shared

// CachePolicyHeadersConfig
// An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
type CachePolicyHeadersConfig struct {
	HeaderBehavior CachePolicyHeaderBehaviorEnum
	Headers        *Headers
}
