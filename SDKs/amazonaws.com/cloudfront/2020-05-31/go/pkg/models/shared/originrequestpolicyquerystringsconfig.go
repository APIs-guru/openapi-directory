package shared

// OriginRequestPolicyQueryStringsConfig
// An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
type OriginRequestPolicyQueryStringsConfig struct {
	QueryStringBehavior OriginRequestPolicyQueryStringBehaviorEnum
	QueryStrings        *QueryStringNames
}
