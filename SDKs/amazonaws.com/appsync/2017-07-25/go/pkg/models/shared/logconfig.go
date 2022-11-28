package shared

// LogConfig
// The CloudWatch Logs configuration.
type LogConfig struct {
	CloudWatchLogsRoleArn string            `json:"cloudWatchLogsRoleArn"`
	ExcludeVerboseContent *bool             `json:"excludeVerboseContent,omitempty"`
	FieldLogLevel         FieldLogLevelEnum `json:"fieldLogLevel"`
}
