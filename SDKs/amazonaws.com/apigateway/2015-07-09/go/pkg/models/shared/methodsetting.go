package shared

type MethodSetting struct {
	CacheDataEncrypted                     *bool                                       `json:"cacheDataEncrypted"`
	CacheTTLInSeconds                      *int64                                      `json:"cacheTtlInSeconds"`
	CachingEnabled                         *bool                                       `json:"cachingEnabled"`
	DataTraceEnabled                       *bool                                       `json:"dataTraceEnabled"`
	LoggingLevel                           *string                                     `json:"loggingLevel"`
	MetricsEnabled                         *bool                                       `json:"metricsEnabled"`
	RequireAuthorizationForCacheControl    *bool                                       `json:"requireAuthorizationForCacheControl"`
	ThrottlingBurstLimit                   *int64                                      `json:"throttlingBurstLimit"`
	ThrottlingRateLimit                    *float64                                    `json:"throttlingRateLimit"`
	UnauthorizedCacheControlHeaderStrategy *UnauthorizedCacheControlHeaderStrategyEnum `json:"unauthorizedCacheControlHeaderStrategy"`
}
