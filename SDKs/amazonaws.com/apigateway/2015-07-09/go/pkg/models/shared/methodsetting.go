package shared

// MethodSetting
// Specifies the method setting properties.
type MethodSetting struct {
	CacheDataEncrypted                     *bool                                       `json:"cacheDataEncrypted,omitempty"`
	CacheTTLInSeconds                      *int64                                      `json:"cacheTtlInSeconds,omitempty"`
	CachingEnabled                         *bool                                       `json:"cachingEnabled,omitempty"`
	DataTraceEnabled                       *bool                                       `json:"dataTraceEnabled,omitempty"`
	LoggingLevel                           *string                                     `json:"loggingLevel,omitempty"`
	MetricsEnabled                         *bool                                       `json:"metricsEnabled,omitempty"`
	RequireAuthorizationForCacheControl    *bool                                       `json:"requireAuthorizationForCacheControl,omitempty"`
	ThrottlingBurstLimit                   *int64                                      `json:"throttlingBurstLimit,omitempty"`
	ThrottlingRateLimit                    *float64                                    `json:"throttlingRateLimit,omitempty"`
	UnauthorizedCacheControlHeaderStrategy *UnauthorizedCacheControlHeaderStrategyEnum `json:"unauthorizedCacheControlHeaderStrategy,omitempty"`
}
