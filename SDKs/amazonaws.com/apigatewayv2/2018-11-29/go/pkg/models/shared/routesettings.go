package shared

type RouteSettings struct {
	DataTraceEnabled       *bool             `json:"DataTraceEnabled,omitempty"`
	DetailedMetricsEnabled *bool             `json:"DetailedMetricsEnabled,omitempty"`
	LoggingLevel           *LoggingLevelEnum `json:"LoggingLevel,omitempty"`
	ThrottlingBurstLimit   *int64            `json:"ThrottlingBurstLimit,omitempty"`
	ThrottlingRateLimit    *float64          `json:"ThrottlingRateLimit,omitempty"`
}
