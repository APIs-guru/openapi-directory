package shared

// StreamingLoggingConfig
// A complex type that controls whether access logs are written for this streaming distribution.
type StreamingLoggingConfig struct {
	Bucket  string
	Enabled bool
	Prefix  string
}
