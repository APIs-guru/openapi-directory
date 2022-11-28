package shared

// QueryStringCacheKeys
// A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.
type QueryStringCacheKeys struct {
	Items    []string
	Quantity int64
}
