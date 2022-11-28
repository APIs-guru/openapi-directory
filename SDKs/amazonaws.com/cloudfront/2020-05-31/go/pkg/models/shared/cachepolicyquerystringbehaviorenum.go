package shared

type CachePolicyQueryStringBehaviorEnum string

const (
	CachePolicyQueryStringBehaviorEnumNone      CachePolicyQueryStringBehaviorEnum = "none"
	CachePolicyQueryStringBehaviorEnumWhitelist CachePolicyQueryStringBehaviorEnum = "whitelist"
	CachePolicyQueryStringBehaviorEnumAllExcept CachePolicyQueryStringBehaviorEnum = "allExcept"
	CachePolicyQueryStringBehaviorEnumAll       CachePolicyQueryStringBehaviorEnum = "all"
)
