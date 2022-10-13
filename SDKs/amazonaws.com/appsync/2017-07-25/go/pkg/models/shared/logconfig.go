package shared

type LogConfig struct {
	CloudWatchLogsRoleArn string            `json:"cloudWatchLogsRoleArn"`
	ExcludeVerboseContent *bool             `json:"excludeVerboseContent"`
	FieldLogLevel         FieldLogLevelEnum `json:"fieldLogLevel"`
}
