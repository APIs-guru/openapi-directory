package shared

// ForwardedValues
// A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
type ForwardedValues struct {
	Cookies              CookiePreference
	Headers              *Headers
	QueryString          bool
	QueryStringCacheKeys *QueryStringCacheKeys
}
