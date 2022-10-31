package shared



type LogsConfig struct {
    CloudWatchLogs *CloudWatchLogsConfig `json:"cloudWatchLogs,omitempty"`
    S3Logs *S3LogsConfig `json:"s3Logs,omitempty"`
    
}

