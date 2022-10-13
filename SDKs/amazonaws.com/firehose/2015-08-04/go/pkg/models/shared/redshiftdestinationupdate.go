package shared

type RedshiftDestinationUpdate struct {
	CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions"`
	ClusterJdbcurl           *string                   `json:"ClusterJDBCURL"`
	CopyCommand              *CopyCommand              `json:"CopyCommand"`
	Password                 *string                   `json:"Password"`
	ProcessingConfiguration  *ProcessingConfiguration  `json:"ProcessingConfiguration"`
	RetryOptions             *RedshiftRetryOptions     `json:"RetryOptions"`
	RoleArn                  *string                   `json:"RoleARN"`
	S3BackupMode             *RedshiftS3BackupModeEnum `json:"S3BackupMode"`
	S3BackupUpdate           *S3DestinationUpdate      `json:"S3BackupUpdate"`
	S3Update                 *S3DestinationUpdate      `json:"S3Update"`
	Username                 *string                   `json:"Username"`
}
