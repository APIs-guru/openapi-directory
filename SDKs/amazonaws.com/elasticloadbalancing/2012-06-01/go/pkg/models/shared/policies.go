package shared

// Policies
// The policies for a load balancer.
type Policies struct {
	AppCookieStickinessPolicies []AppCookieStickinessPolicy
	LbCookieStickinessPolicies  []LbCookieStickinessPolicy
	OtherPolicies               []string
}
