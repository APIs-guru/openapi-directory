package shared

type RouteSettings struct {
	DataTraceEnabled       *bool             `json:"DataTraceEnabled"`
	DetailedMetricsEnabled *bool             `json:"DetailedMetricsEnabled"`
	LoggingLevel           *LoggingLevelEnum `json:"LoggingLevel"`
	ThrottlingBurstLimit   *int64            `json:"ThrottlingBurstLimit"`
	ThrottlingRateLimit    *float64          `json:"ThrottlingRateLimit"`
}
