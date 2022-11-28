package shared

// LogsLocation
// Information about build logs in CloudWatch Logs.
type LogsLocation struct {
	CloudWatchLogs    *CloudWatchLogsConfig `json:"cloudWatchLogs,omitempty"`
	CloudWatchLogsArn *string               `json:"cloudWatchLogsArn,omitempty"`
	DeepLink          *string               `json:"deepLink,omitempty"`
	GroupName         *string               `json:"groupName,omitempty"`
	S3DeepLink        *string               `json:"s3DeepLink,omitempty"`
	S3Logs            *S3LogsConfig         `json:"s3Logs,omitempty"`
	S3LogsArn         *string               `json:"s3LogsArn,omitempty"`
	StreamName        *string               `json:"streamName,omitempty"`
}
