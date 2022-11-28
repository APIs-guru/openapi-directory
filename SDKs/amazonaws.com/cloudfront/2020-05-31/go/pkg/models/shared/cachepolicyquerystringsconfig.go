package shared

// CachePolicyQueryStringsConfig
// An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
type CachePolicyQueryStringsConfig struct {
	QueryStringBehavior CachePolicyQueryStringBehaviorEnum
	QueryStrings        *QueryStringNames
}
