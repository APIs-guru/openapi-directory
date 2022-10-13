package shared

type RedshiftDestinationDescription struct {
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions"`
	ClusterJdbcurl           string                    `json:"ClusterJDBCURL"`
	CopyCommand              CopyCommand               `json:"CopyCommand"`
	ProcessingConfiguration  *ProcessingConfiguration  `json:"ProcessingConfiguration"`
	RetryOptions             *RedshiftRetryOptions     `json:"RetryOptions"`
	RoleArn                  string                    `json:"RoleARN"`
	S3BackupDescription      *S3DestinationDescription `json:"S3BackupDescription"`
	S3BackupMode             *RedshiftS3BackupModeEnum `json:"S3BackupMode"`
	S3DestinationDescription S3DestinationDescription  `json:"S3DestinationDescription"`
	Username                 string                    `json:"Username"`
}
