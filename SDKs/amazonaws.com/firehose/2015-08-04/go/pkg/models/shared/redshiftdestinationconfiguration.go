package shared

type RedshiftDestinationConfiguration struct {
	CloudWatchLoggingOptions *CloudWatchLoggingOptions   `json:"CloudWatchLoggingOptions,omitempty"`
	ClusterJdbcurl           string                      `json:"ClusterJDBCURL"`
	CopyCommand              CopyCommand                 `json:"CopyCommand"`
	Password                 string                      `json:"Password"`
	ProcessingConfiguration  *ProcessingConfiguration    `json:"ProcessingConfiguration,omitempty"`
	RetryOptions             *RedshiftRetryOptions       `json:"RetryOptions,omitempty"`
	RoleArn                  string                      `json:"RoleARN"`
	S3BackupConfiguration    *S3DestinationConfiguration `json:"S3BackupConfiguration,omitempty"`
	S3BackupMode             *RedshiftS3BackupModeEnum   `json:"S3BackupMode,omitempty"`
	S3Configuration          S3DestinationConfiguration  `json:"S3Configuration"`
	Username                 string                      `json:"Username"`
}
