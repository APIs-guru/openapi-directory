package shared

// LogsConfig
//
//	Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
type LogsConfig struct {
	CloudWatchLogs *CloudWatchLogsConfig `json:"cloudWatchLogs,omitempty"`
	S3Logs         *S3LogsConfig         `json:"s3Logs,omitempty"`
}
