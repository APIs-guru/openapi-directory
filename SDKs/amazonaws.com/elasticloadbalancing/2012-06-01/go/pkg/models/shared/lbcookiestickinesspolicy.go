package shared

// LbCookieStickinessPolicy
// Information about a policy for duration-based session stickiness.
type LbCookieStickinessPolicy struct {
	CookieExpirationPeriod *int64
	PolicyName             *string
}
