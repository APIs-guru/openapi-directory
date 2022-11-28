package shared

// OriginRequestPolicyCookiesConfig
// An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
type OriginRequestPolicyCookiesConfig struct {
	CookieBehavior OriginRequestPolicyCookieBehaviorEnum
	Cookies        *CookieNames
}
