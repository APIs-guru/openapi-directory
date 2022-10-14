package shared

type SplunkDestinationDescription struct {
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions `json:"CloudWatchLoggingOptions,omitempty"`
	HecAcknowledgmentTimeoutInSeconds *int64                    `json:"HECAcknowledgmentTimeoutInSeconds,omitempty"`
	HecEndpoint                       *string                   `json:"HECEndpoint,omitempty"`
	HecEndpointType                   *HecEndpointTypeEnum      `json:"HECEndpointType,omitempty"`
	HecToken                          *string                   `json:"HECToken,omitempty"`
	ProcessingConfiguration           *ProcessingConfiguration  `json:"ProcessingConfiguration,omitempty"`
	RetryOptions                      *SplunkRetryOptions       `json:"RetryOptions,omitempty"`
	S3BackupMode                      *SplunkS3BackupModeEnum   `json:"S3BackupMode,omitempty"`
	S3DestinationDescription          *S3DestinationDescription `json:"S3DestinationDescription,omitempty"`
}
