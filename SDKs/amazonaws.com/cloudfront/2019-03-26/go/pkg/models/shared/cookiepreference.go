package shared

// CookiePreference
// A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
type CookiePreference struct {
	Forward          ItemSelectionEnum
	WhitelistedNames *CookieNames
}
