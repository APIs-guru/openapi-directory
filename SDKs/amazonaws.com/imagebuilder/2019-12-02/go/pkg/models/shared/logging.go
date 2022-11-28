package shared

// Logging
// Logging configuration defines where Image Builder uploads your logs.
type Logging struct {
	S3Logs *S3Logs `json:"s3Logs,omitempty"`
}
