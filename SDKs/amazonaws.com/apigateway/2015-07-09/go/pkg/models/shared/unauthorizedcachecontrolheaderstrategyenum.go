package shared

type UnauthorizedCacheControlHeaderStrategyEnum string

const (
	UnauthorizedCacheControlHeaderStrategyEnumFailWith403                  UnauthorizedCacheControlHeaderStrategyEnum = "FAIL_WITH_403"
	UnauthorizedCacheControlHeaderStrategyEnumSucceedWithResponseHeader    UnauthorizedCacheControlHeaderStrategyEnum = "SUCCEED_WITH_RESPONSE_HEADER"
	UnauthorizedCacheControlHeaderStrategyEnumSucceedWithoutResponseHeader UnauthorizedCacheControlHeaderStrategyEnum = "SUCCEED_WITHOUT_RESPONSE_HEADER"
)
