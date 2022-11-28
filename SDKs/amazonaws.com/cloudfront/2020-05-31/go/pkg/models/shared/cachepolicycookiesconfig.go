package shared

// CachePolicyCookiesConfig
// An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
type CachePolicyCookiesConfig struct {
	CookieBehavior CachePolicyCookieBehaviorEnum
	Cookies        *CookieNames
}
