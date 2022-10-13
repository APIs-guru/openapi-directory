package shared

type LogsLocation struct {
	CloudWatchLogs    *CloudWatchLogsConfig `json:"cloudWatchLogs"`
	CloudWatchLogsArn *string               `json:"cloudWatchLogsArn"`
	DeepLink          *string               `json:"deepLink"`
	GroupName         *string               `json:"groupName"`
	S3DeepLink        *string               `json:"s3DeepLink"`
	S3Logs            *S3LogsConfig         `json:"s3Logs"`
	S3LogsArn         *string               `json:"s3LogsArn"`
	StreamName        *string               `json:"streamName"`
}
