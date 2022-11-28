package shared

// LoggingConfig
// A complex type that controls whether access logs are written for the distribution.
type LoggingConfig struct {
	Bucket         string
	Enabled        bool
	IncludeCookies bool
	Prefix         string
}
