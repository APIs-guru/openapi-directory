package shared

// SplunkDestinationConfiguration
// Describes the configuration of a destination in Splunk.
type SplunkDestinationConfiguration struct {
	CloudWatchLoggingOptions          *CloudWatchLoggingOptions  `json:"CloudWatchLoggingOptions,omitempty"`
	HecAcknowledgmentTimeoutInSeconds *int64                     `json:"HECAcknowledgmentTimeoutInSeconds,omitempty"`
	HecEndpoint                       string                     `json:"HECEndpoint"`
	HecEndpointType                   HecEndpointTypeEnum        `json:"HECEndpointType"`
	HecToken                          string                     `json:"HECToken"`
	ProcessingConfiguration           *ProcessingConfiguration   `json:"ProcessingConfiguration,omitempty"`
	RetryOptions                      *SplunkRetryOptions        `json:"RetryOptions,omitempty"`
	S3BackupMode                      *SplunkS3BackupModeEnum    `json:"S3BackupMode,omitempty"`
	S3Configuration                   S3DestinationConfiguration `json:"S3Configuration"`
}
