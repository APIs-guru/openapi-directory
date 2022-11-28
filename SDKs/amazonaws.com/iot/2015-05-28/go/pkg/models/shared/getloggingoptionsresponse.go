package shared

// GetLoggingOptionsResponse
// The output from the GetLoggingOptions operation.
type GetLoggingOptionsResponse struct {
	LogLevel *LogLevelEnum `json:"logLevel,omitempty"`
	RoleArn  *string       `json:"roleArn,omitempty"`
}
