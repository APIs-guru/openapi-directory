package shared

type APICachingBehaviorEnum string

const (
	APICachingBehaviorEnumFullRequestCaching APICachingBehaviorEnum = "FULL_REQUEST_CACHING"
	APICachingBehaviorEnumPerResolverCaching APICachingBehaviorEnum = "PER_RESOLVER_CACHING"
)
