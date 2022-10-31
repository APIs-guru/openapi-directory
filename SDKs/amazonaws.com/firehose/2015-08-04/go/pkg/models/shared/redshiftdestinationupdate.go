package shared



type RedshiftDestinationUpdate struct {
    CloudWatchLoggingOptions *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
    ClusterJdbcurl *string `json:"ClusterJDBCURL,omitempty"`
    CopyCommand *CopyCommand `json:"CopyCommand,omitempty"`
    Password *string `json:"Password,omitempty"`
    ProcessingConfiguration *ProcessingConfiguration `json:"ProcessingConfiguration,omitempty"`
    RetryOptions *RedshiftRetryOptions `json:"RetryOptions,omitempty"`
    RoleArn *string `json:"RoleARN,omitempty"`
    S3BackupMode *RedshiftS3BackupModeEnum `json:"S3BackupMode,omitempty"`
    S3BackupUpdate *S3DestinationUpdate `json:"S3BackupUpdate,omitempty"`
    S3Update *S3DestinationUpdate `json:"S3Update,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

