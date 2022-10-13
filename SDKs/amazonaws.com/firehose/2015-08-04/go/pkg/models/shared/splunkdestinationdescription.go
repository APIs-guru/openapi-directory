package shared

type SplunkDestinationDescription struct {
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions"`
	HecAcknowledgmentTimeoutInSeconds *int64                    `json:"HECAcknowledgmentTimeoutInSeconds"`
	HecEndpoint                       *string                   `json:"HECEndpoint"`
	HecEndpointType                   *HecEndpointTypeEnum      `json:"HECEndpointType"`
	HecToken                          *string                   `json:"HECToken"`
	ProcessingConfiguration           *ProcessingConfiguration  `json:"ProcessingConfiguration"`
	RetryOptions                      *SplunkRetryOptions       `json:"RetryOptions"`
	S3BackupMode                      *SplunkS3BackupModeEnum   `json:"S3BackupMode"`
	S3DestinationDescription          *S3DestinationDescription `json:"S3DestinationDescription"`
}
