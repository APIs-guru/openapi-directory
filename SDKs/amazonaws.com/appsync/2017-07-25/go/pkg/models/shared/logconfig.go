package shared



type LogConfig struct {
    CloudWatchLogsRoleArn string `json:"cloudWatchLogsRoleArn"`
    ExcludeVerboseContent *bool `json:"excludeVerboseContent,omitempty"`
    FieldLogLevel FieldLogLevelEnum `json:"fieldLogLevel"`
    
}

