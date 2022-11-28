package shared

type CachePolicyCookieBehaviorEnum string

const (
	CachePolicyCookieBehaviorEnumNone      CachePolicyCookieBehaviorEnum = "none"
	CachePolicyCookieBehaviorEnumWhitelist CachePolicyCookieBehaviorEnum = "whitelist"
	CachePolicyCookieBehaviorEnumAllExcept CachePolicyCookieBehaviorEnum = "allExcept"
	CachePolicyCookieBehaviorEnumAll       CachePolicyCookieBehaviorEnum = "all"
)
