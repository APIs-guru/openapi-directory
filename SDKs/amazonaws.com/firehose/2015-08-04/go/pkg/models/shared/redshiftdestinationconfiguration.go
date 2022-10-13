package shared

type RedshiftDestinationConfiguration struct {
	CloudWatchLoggingOptions *CloudWatchLoggingOptions   `json:"CloudWatchLoggingOptions"`
	ClusterJdbcurl           string                      `json:"ClusterJDBCURL"`
	CopyCommand              CopyCommand                 `json:"CopyCommand"`
	Password                 string                      `json:"Password"`
	ProcessingConfiguration  *ProcessingConfiguration    `json:"ProcessingConfiguration"`
	RetryOptions             *RedshiftRetryOptions       `json:"RetryOptions"`
	RoleArn                  string                      `json:"RoleARN"`
	S3BackupConfiguration    *S3DestinationConfiguration `json:"S3BackupConfiguration"`
	S3BackupMode             *RedshiftS3BackupModeEnum   `json:"S3BackupMode"`
	S3Configuration          S3DestinationConfiguration  `json:"S3Configuration"`
	Username                 string                      `json:"Username"`
}
